import { Telegraf } from "telegraf";
import { TController } from "../../../models/TController";
import {
  ITelegramProvider,
  TGetUpdates,
  TSendMessage,
} from "../ITelegramProvider";

export class TelegrafTelegramProvider implements ITelegramProvider {
  private readonly client = new Telegraf(process.env.TELEGRAM_TOKEN!);

  start(): void {
    this.client.launch();
  }

  stop(): void {
    this.client.stop();
  }

  private async createGroup(name: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  private async sendMessage({ chatId, message }: TSendMessage): Promise<void> {
    await this.client.telegram.sendMessage(chatId, message);
  }

  async getUpdates(): Promise<TGetUpdates> {
    const lastUpdates = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/getUpdates`
    );

    const lastUpdatesJson = await lastUpdates.json();

    return lastUpdatesJson;
  }

  listenCommands(controllers: TController): void {
    for (const controller of controllers) {
      const command = controller[0];
      const handler = controller[1];

      this.client.hears(command, (ctx) => {
        const data = {
          sendMessage: (message: string) =>
            this.sendMessage({ chatId: ctx.chat.id, message }),
        };

        handler.handle(data);
      });
    }
  }
}

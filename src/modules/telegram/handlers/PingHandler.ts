import { IHandler } from "../../../shared/models/IHandler";
import { TTelegramData } from "../../../shared/providers/TelegramProvider/ITelegramProvider";

export class PingHandler implements IHandler {
  async handle(data: TTelegramData): Promise<void> {
    const message = "pong";

    data.sendMessage(message);
  }
}

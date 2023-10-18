import { ECommand } from "../../models/ECommand";
import { TController } from "../../models/TController";

export type TSendMessage = {
  chatId: number;
  message: string;
};

export type TGetUpdates = {
  ok: boolean;
  result: [
    {
      update_id: number;
      message: {
        message_id: number;
        from: {
          id: number;
          is_bot: boolean;
          first_name: string;
          username: string;
          language_code: string;
        };
        chat: {
          id: number;
          first_name: string;
          username: string;
          type: string;
        };
        date: number;
        text: string;
      };
    }
  ];
};

export type TCommandHandler = (command: ECommand) => void;

export type TCommandController = {
  [command in ECommand]: TCommandHandler;
};

export type TTelegramData = {
  sendMessage: (message: string) => Promise<void>;
};

export interface ITelegramProvider {
  start(): void;
  stop(): void;
  getUpdates(): Promise<TGetUpdates>;
  listenCommands(controllers: TController): void;
}

import { TTelegramData } from "../providers/TelegramProvider/ITelegramProvider";

export interface IHandler {
  handle(data: TTelegramData): Promise<void>;
}

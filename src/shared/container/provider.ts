import { container } from "tsyringe";
import { ITelegramProvider } from "../providers/TelegramProvider/ITelegramProvider";
import { TelegrafTelegramProvider } from "../providers/TelegramProvider/implementations/TelegrafTelegramProvider";

export const registerProviders = () => {
  container.registerSingleton<ITelegramProvider>(
    "TelegramProvider",
    TelegrafTelegramProvider
  );
};

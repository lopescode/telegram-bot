import { config } from "dotenv";
import "reflect-metadata";
import { container } from "tsyringe";
import { TelegramRouter } from "./modules/telegram/router/TelegramRouter";
import { registerContainer } from "./shared/container";
import { ITelegramProvider } from "./shared/providers/TelegramProvider/ITelegramProvider";

config();
registerContainer();

const telegramBot = container.resolve<ITelegramProvider>("TelegramProvider");
const controllers = new TelegramRouter().controllers;

telegramBot.start();
telegramBot.listenCommands(controllers);

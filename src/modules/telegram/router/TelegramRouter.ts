import { container } from "tsyringe";
import { ECommand } from "../../../shared/models/ECommand";
import { IHandler } from "../../../shared/models/IHandler";
import { PingHandler } from "../handlers/PingHandler";

export class TelegramRouter {
  controllers: Map<ECommand, IHandler> = new Map();

  constructor() {
    this.registerHandler();
  }

  registerHandler() {
    this.controllers.set(ECommand.ping, container.resolve(PingHandler));
  }
}

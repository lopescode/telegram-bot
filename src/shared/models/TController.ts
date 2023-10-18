import { ECommand } from "./ECommand";
import { IHandler } from "./IHandler";

export type TController = Map<ECommand, IHandler>;

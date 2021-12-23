import { InformationDialogType } from "@app-enums";

export class GameErrorHandler extends Error {
  constructor(message: string, public informationDialogType: InformationDialogType) {
    super(message);
  }
}

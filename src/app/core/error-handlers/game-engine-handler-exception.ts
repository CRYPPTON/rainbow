import { ErrorHandler, Injectable } from "@angular/core";
import { InformationDialogType } from "src/app/shared/enums";
import { GameErrorHandler } from ".";
import { ExceptionDialogService } from "../services";

@Injectable()
export class GameEngineHandlerException implements ErrorHandler {

  constructor(private exceptionDialogServices: ExceptionDialogService) {}

  handleError(error: any): void {
    if(error instanceof GameErrorHandler) {
      // open dialog for type win/lose.
      this.exceptionDialogServices.openDialog('Win', InformationDialogType.win);
    } else {
      // open regular error dialog.
    }
  }

}

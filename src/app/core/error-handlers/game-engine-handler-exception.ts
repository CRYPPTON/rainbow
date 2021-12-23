import { ErrorHandler, Injectable } from "@angular/core";
import { InformationDialogType } from "@app-enums";
import { GameErrorHandler } from "@app-error-handlers";
import { ExceptionDialogService } from "@app-services";

@Injectable()
export class GameEngineHandlerException implements ErrorHandler {

  constructor(private exceptionDialogServices: ExceptionDialogService) { }

  handleError(error: any): void {
    if (error instanceof GameErrorHandler) {
      // open dialog for type win/lose.
      this.exceptionDialogServices.openDialog(error.message, (<GameErrorHandler>error).informationDialogType);
    } else {
      // open regular error dialog.
      this.exceptionDialogServices.openDialog('An unknown error', InformationDialogType.lose);
    }
  }

}

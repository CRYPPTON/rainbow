import { ErrorHandler } from "@angular/core";
import { GameErrorHandler } from ".";

export class GameEngineHandlerException implements ErrorHandler {

  handleError(error: any): void {
    if(error instanceof GameErrorHandler) {
      // open dialog for type win/lose.
    } else {
      // open regular error dialog.
    }
  }

}

import { Component } from '@angular/core';
import { GameErrorHandler } from '@app-error-handlers';
import { InformationDialogType } from '@app-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rainbow';

  //#region UI events

 /**
  * This method is used just for test purpose.
  */
  public onTestException(): void {
    //test different exception.
    throw new GameErrorHandler('Do you want to play a new game?', InformationDialogType.lose);
  }

  //#endregion
}

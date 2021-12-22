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

  public onClick(): void {
    //test different exception.
    throw new GameErrorHandler('Greska', InformationDialogType.win);
  }

  //#endregion
}

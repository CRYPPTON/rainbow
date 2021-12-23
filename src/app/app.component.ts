import { Component } from '@angular/core';
import { GameErrorHandler } from '@app-error-handlers';
import { InformationDialogType } from '@app-enums';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('sr');
  }

  //#region UI events

  /**
   * This method is used just for test purpose.
   */
  public onTestException(): void {
    //test different exception.
    throw new GameErrorHandler(this.translateService.instant('game-message.win'), InformationDialogType.win);
  }

  //#endregion
}

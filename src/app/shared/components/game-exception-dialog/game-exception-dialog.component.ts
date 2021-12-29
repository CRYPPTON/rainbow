import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformationDialogType } from '@app-enums';
import { InformationDialogData } from '@app-models';
import { GameEngineService } from '@app-services';

@Component({
  selector: 'app-game-exception-dialog',
  templateUrl: './game-exception-dialog.component.html',
  styleUrls: ['./game-exception-dialog.component.scss']
})
export class GameExceptionDialogComponent {
  public icon: string;
  public dialogType: InformationDialogType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InformationDialogData,
    private gameEngineService: GameEngineService
  ) {
    this.dialogType = data.informationDialogType;
    if (this.dialogType === InformationDialogType.win) {
      this.icon = 'sentiment_very_satisfied';
    } else if (this.dialogType === InformationDialogType.lose) {
      this.icon = 'sentiment_very_dissatisfied';
    } else if (this.dialogType === InformationDialogType.fillFields) {
      this.icon = 'announcement';
    }
  }

  //#region UI events

  public onNewGame(): void {
    this.gameEngineService.newGame();
  }

  public onEndGame(): void {
    this.gameEngineService.endGame();
  }

  //#endregion

}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformationDialogType } from '@app-enums';
import { InformationDialogData } from '@app-models';

@Component({
  selector: 'app-game-exception-dialog',
  templateUrl: './game-exception-dialog.component.html',
  styleUrls: ['./game-exception-dialog.component.scss']
})
export class GameExceptionDialogComponent {
  public title: string;
  public icon: string;
  public dialogType: InformationDialogType;

  constructor(@Inject(MAT_DIALOG_DATA) public data: InformationDialogData) {
    this.dialogType = data.informationDialogType;
    if (this.dialogType === InformationDialogType.win) {
      this.title = 'Win';
      this.icon = 'sentiment_very_satisfied';
    } else {
      this.title = 'Lose';
      this.icon = 'sentiment_very_dissatisfied';
    }
  }

}

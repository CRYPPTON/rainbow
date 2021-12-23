import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformationDialogData } from '../../models';

@Component({
  selector: 'app-game-exception-dialog',
  templateUrl: './game-exception-dialog.component.html',
  styleUrls: ['./game-exception-dialog.component.scss']
})
export class GameExceptionDialogComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: InformationDialogData) { }

}

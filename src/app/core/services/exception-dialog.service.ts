import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameExceptionDialogComponent } from 'src/app/shared/components/game-exception-dialog/game-exception-dialog.component';
import { InformationDialogType } from 'src/app/shared/enums';

@Injectable({
  providedIn: 'root'
})
export class ExceptionDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(message: string, informationDialogType: InformationDialogType): void {
    this.dialog.open(GameExceptionDialogComponent, {
      data: {
        message: message,
        informationDialogType: informationDialogType
      }
    });
  }

}

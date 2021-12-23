import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { GameExceptionDialogComponent } from './components/game-exception-dialog/game-exception-dialog.component';

@NgModule({
  declarations: [
    GameExceptionDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    GameExceptionDialogComponent
  ]
})
export class SharedModule { }

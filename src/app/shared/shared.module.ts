import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { GameExceptionDialogComponent } from './components/game-exception-dialog/game-exception-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GameExceptionDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    GameExceptionDialogComponent
  ]
})
export class SharedModule { }

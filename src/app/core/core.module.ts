import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameEngineHandlerException } from './error-handlers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GameEngineHandlerException
    }
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { RainbowGameComponent } from './components/rainbow-game/rainbow-game.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleGameTableFieldComponent } from './components/single-game-table-field/single-game-table-field.component';

@NgModule({
  declarations: [
    RainbowGameComponent,
    GameTableComponent,
    SingleGameTableFieldComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
  ]
})
export class GameModule { }

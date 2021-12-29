import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RainbowGameComponent } from './components/rainbow-game/rainbow-game.component';

const routes: Routes = [
  {
    path: '', component: RainbowGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

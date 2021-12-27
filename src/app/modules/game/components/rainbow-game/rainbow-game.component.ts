import { Component } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';

@Component({
  selector: 'app-rainbow-game',
  templateUrl: './rainbow-game.component.html',
  styleUrls: ['./rainbow-game.component.scss']
})
export class RainbowGameComponent {

  constructor(private gameEngineService: GameEngineService) { }

  //#region UI events

  public onPlay(): void {
    this.gameEngineService.play();
  }

  //#endregion

}

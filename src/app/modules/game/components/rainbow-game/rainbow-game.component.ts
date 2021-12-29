import { Component } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';

@Component({
  selector: 'app-rainbow-game',
  templateUrl: './rainbow-game.component.html',
  styleUrls: ['./rainbow-game.component.scss']
})
export class RainbowGameComponent {

  //#region Class properties

  get attempt(): number {
    return this.gameEngineService.attempt;
  }

  get gameOver(): boolean {
    return this.gameEngineService.isGameOver;
  }

  //#endregion

  constructor(private gameEngineService: GameEngineService) { }

  //#region UI events

  public onPlay(): void {
    this.gameEngineService.play();
  }

  public onReset(): void {
    this.gameEngineService.reset();
  }

  public onNewGame(): void {
    this.gameEngineService.newGame();
  }

  //#endregion

}

import { Component, Input } from '@angular/core';
import { GameEngineService } from 'src/app/core/services';
import { GameColor } from 'src/app/shared/enums';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent {

  //#region Angular stuff

  @Input() isUserTable: boolean;

  //#endregion

  //#region Class properties

  public get userGameTable(): Array<GameColor[]> {
    return this.gameEngineService.userGameTable;
  }

  //#endregion

  constructor(private gameEngineService: GameEngineService) { }

}

import { Component, Input } from '@angular/core';
import { GameEngineService } from '@app-services';
import { GameCheckColor, GameColor } from '@app-enums';

@Component({
  selector: 'app-single-game-table-field',
  templateUrl: './single-game-table-field.component.html',
  styleUrls: ['./single-game-table-field.component.scss']
})
export class SingleGameTableFieldComponent {

  //#region Angular stuff

  @Input() isUserTable: boolean;
  @Input() row: number;
  @Input() col: number;

  //#endregion

  //#region Class properties

  public get color(): GameColor {
    return this.gameEngineService.userGameTable[this.row][this.col];
  }

  public get checkColor(): GameCheckColor {
    return this.checkGameTable[this.row][this.col];
  }

  public get checkGameTable(): Array<GameCheckColor[]> {
    return this.gameEngineService.checkGameTable;
  }

  public get activeTableRow(): number {
    return this.gameEngineService.activeTableRow;
  }

  private numberOfClick: number = 0;

  //#endregion

  constructor(private gameEngineService: GameEngineService) {
    this.gameEngineService.checkGameTable
  }

  //#region UI events

  public onSetColor(row, col): void {
    if (this.isUserTable) {
      let colorNumber = this.numberOfClick % 5;
      this.gameEngineService.setUserTableColor(row, col, colorNumber);
      this.numberOfClick++;
    }

    //#endregion

  }

}

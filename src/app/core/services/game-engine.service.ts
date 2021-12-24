import { Injectable } from '@angular/core';
import { GameCheckColor, GameUserColor, InformationDialogType } from '@app-enums';
import { TranslateService } from '@ngx-translate/core';
import { GameErrorHandler } from '../error-handlers';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  //#region Class properties

  userGameTable: Array<GameUserColor[]>;
  checkGameTable: Array<GameCheckColor[]>;
  activeTableRow: number;

  private colorUserValues: GameUserColor[];
  private colorCheckValues: GameCheckColor[];
  private winColorCombination: Array<GameUserColor>;
  private rows: number;
  private columns: number;

  //#endregion

  constructor(private translateService: TranslateService) {
    this.initMethod();
  }

  //#region Game functionality

  public checkWinCombination(): void {
    this.exceptionFillAllFields();

    let guessedColorAndPosition: number = 0;
    let guessedColor: number = 0;

    // code for check...

    this.activeTableRow--;
  }

  //#endregion

  //#region Init methods

  /**
   * Init all class properties.
   */
  private initMethod() {
    this.rows = 8;
    this.columns = 4;
    this.activeTableRow = this.rows - 1;

    this.colorUserValues = this.getPropertyFromEnum(GameUserColor);
    this.colorCheckValues = this.getPropertyFromEnum(GameUserColor);

    this.userGameTable = this.createTable();
    this.checkGameTable = this.createTable();

    this.winColorCombination = this.generateColorCombination();
  }

  //#endregion

  //#region Game exceptions methods

  /**
   * Check for empty fields in active row.
   */
  private exceptionFillAllFields(): void {
    for (let i = 0; i < this.userGameTable[this.activeTableRow].length; i++) {
      if (!this.userGameTable[this.activeTableRow][i]) {
        throw new GameErrorHandler(
          this.translateService.instant('exceptions.warning'),
          InformationDialogType.fillField);
      }
    }

  }

  //#endregion

  //#region Game utility

  private createTable(): Array<[]> {
    let table = new Array();
    for (let i = 0; i < this.rows; i++) {
      table.push(new Array(this.columns));
    }
    return table;
  }

  /**
   * Set color of user table.
   * @param row
   * @param col
   * @param colorNumber
   */
  public setTableColor(row: number, col: number, colorNumber: number): void {
    this.userGameTable[row][col] = this.colorUserValues[colorNumber];
  }

  /**
   *
   * @returns a random array with 'GameColor'.
   */
  private generateColorCombination(): GameUserColor[] {
    let randomCombination: GameUserColor[] = new Array();
    for (let i = 0; i < this.columns; i++) {
      let randomInt = this.randomInteger();
      randomCombination.push(this.colorUserValues[randomInt]);
    }
    return randomCombination;
  }

  //#endregion

  //#region

  /**
  *
  * @returns a array with random combination of game color:
  */
  private randomInteger(): number {
    let length = this.colorUserValues.length;
    return Math.floor(Math.random() * length);
  }

  /**
  *
  * @param enums that contains the properties.
  * @returns an array of enum properties.
  */
  private getPropertyFromEnum(enums: any): Array<any> {
    const enumValueArray = Object.values(enums).filter(color => (typeof color === 'string'));
    return enumValueArray;
  }

  //#endregion

}

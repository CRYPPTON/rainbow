import { Injectable } from '@angular/core';
import { GameCheckColor, GameColor, InformationDialogType } from '@app-enums';
import { TranslateService } from '@ngx-translate/core';
import { GameErrorHandler } from '@app-error-handlers';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  //#region Class properties

  userGameTable: Array<GameColor[]>;
  checkGameTable: Array<GameCheckColor[]>;
  activeTableRow: number;

  private rows: number;
  private columns: number;
  private winCombination: Array<GameColor> | string[];

  //#endregion

  constructor(private translateService: TranslateService) {
    this.initMethod();
  }

  //#region Game functionality

  public play(): void {

    this.exceptionFillAllFields();

    let hits = { correct: 0, incorrect: 0 };

    let hitTest = { correct: 0, incorrect: 0 };

    let winColorCombination = this.winCombination.slice();
    let userRowCombination = this.userGameTable[this.activeTableRow].slice();

    // for (let i = 0; i < winColorCombination.length; i++) {
    //   if (winColorCombination[i] === userRowCombination[i]) {
    //     hitTest.correct += 1;
    //     winColorCombination[i] = null;
    //     userRowCombination[i] = null;
    //   }
    // }

    // for (let i = 0; i < userRowCombination.length; i++) {
    //   for (let j = 0; j < winColorCombination.length; j++) {
    //     if (userRowCombination[j] && winColorCombination[i]) {
    //       if (userRowCombination[j] === winColorCombination[i]) {
    //         hitTest.incorrect += 1;
    //         userRowCombination[j] = null;
    //         winColorCombination[i] = null;
    //       }
    //     }
    //   }
    // }

    let grey = [];
    let black = [];

    for (let i = 0; i < 4; i++) {
      if (this.winCombination[i] === this.userGameTable[this.activeTableRow][i]) {
        hits.correct++;
        black.push(i);
      }
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          i != j &&
          this.userGameTable[this.activeTableRow][j] === this.winCombination[i] &&
          black.indexOf(j) == -1 &&
          black.indexOf(i) == -1 &&
          grey.indexOf(i) == -1
        ) {
          hits.incorrect++;
          grey.push(i);
        }
      }
    }

    this.setCheckTable(hits);

    this.exceptionCheckWin();

    this.activeTableRow--;
  }

  //#endregion

  //#region Init methods

  /**
   * Init Class properties.
   */
  private initMethod() {
    this.rows = 8;
    this.columns = 4;
    this.activeTableRow = this.rows - 1;

    this.userGameTable = this.createTable();
    this.checkGameTable = this.createTable();

    this.winCombination = this.generateCombination();
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
          InformationDialogType.fillFields);
      }
    }
  }

  /**
   *
   */
  private exceptionCheckWin(): void {
    let isAllCorrect = this.checkForWin();

    if (isAllCorrect) {
      throw new GameErrorHandler(
        this.translateService.instant('game-message.win'),
        InformationDialogType.win);
    }
  }

  /**
   * Check that all fields are guessed.
   * @returns
   */
  private checkForWin(): boolean {
    let isAllCorrect: boolean = true;

    for (let i = 0; i < this.checkGameTable[this.activeTableRow].length; i++) {
      if ((this.checkGameTable[this.activeTableRow][0] !==
        this.checkGameTable[this.activeTableRow][i]) ||
        this.checkGameTable[this.activeTableRow][0] == undefined) {
        isAllCorrect = false;
      }
    }
    return isAllCorrect;
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
  public setUserTableColor(row: number, col: number, colorNumber: number): void {
    this.userGameTable[row][col] = <GameColor><unknown>GameColor[colorNumber];
  }

  /**
   * Set table with hits.
   * @param hits object that contain correct and incorrect hits.
   */
  private setCheckTable(hits) {
    for (let i = 0; i < hits.correct + hits.incorrect; i++) {
      if (i < hits.correct) {
        this.checkGameTable[this.activeTableRow][i] = GameCheckColor.black;
      } else {
        this.checkGameTable[this.activeTableRow][i] = GameCheckColor.grey;
      }
    }
  }

  /**
   *
   * @returns a random array with 'GameColor'.
   */
  private generateCombination(): GameColor[] | string[] {
    let randomCombination: GameColor[] = new Array();
    for (let i = 0; i < this.columns; i++) {
      let randomInt = this.randomInteger();
      randomCombination.push(<GameColor><unknown>GameColor[randomInt]);
    }
    let temp = ['yellow', 'green', 'green', 'orange'];
    // let temp = [GameColor.blue, GameColor.red, GameColor.yellow, GameColor.blue];
    return temp;
  }

  /**
  *
  * @returns a array with random combination of game color:
  */
  private randomInteger(): number {
    return Math.floor(Math.random() * 5);
  }

  //#endregion

}

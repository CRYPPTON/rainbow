import { Injectable } from '@angular/core';
import { GameCheckColor, GameColor, InformationDialogType } from '@app-enums';
import { TranslateService } from '@ngx-translate/core';
import { GameErrorHandler } from '@app-error-handlers';
import { HitData } from '@app-models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  //#region Class properties

  counter$ = new BehaviorSubject<number>(0);
  checkGameTable: Array<GameCheckColor[]>;
  userGameTable: Array<GameColor[]>;
  activeRow: number;
  attempt: number;
  isGameOver: boolean

  private rows: number;
  private columns: number;
  private winCombination: Array<GameColor> | string[];

  //#endregion

  constructor(private translateService: TranslateService) {
    this.newGame();
  }

  //#region Game functionality

  public play(): void {

    this.exceptionFillAllFields();

    const hits = this.compareTwoRows();

    this.setCheckTable(hits);

    this.exceptionCheckWin();

    this.exceptionCheckEndGame();

    this.activeRow--;
    this.attempt++;
  }

  /**
   * create new game.
   */
  public newGame(): void {
    this.initMethod();
    this.winCombination = this.generateCombination();
  }

  /**
   *  Set active row to null.
   */
  public endGame(): void {
    this.isGameOver = true;
    this.activeRow = null;
  }

  /**
   * reset user game table.
   */
  public reset(): void {
    this.initMethod();
  }

  //#endregion

  //#region Init methods

  /**
   * Init Class properties.
   */
  private initMethod() {
    this.rows = 8;
    this.columns = 4;
    this.activeRow = this.rows - 1;
    this.attempt = 0;
    this.counter$.next(0);
    this.isGameOver = false;

    this.userGameTable = this.createTable();
    this.checkGameTable = this.createTable();
  }

  //#endregion

  //#region Game exceptions methods

  /**
   * Check for empty fields in active row.
   */
  private exceptionFillAllFields(): void {
    for (let i = 0; i < this.userGameTable[this.activeRow].length; i++) {
      if (!this.userGameTable[this.activeRow][i]) {
        throw new GameErrorHandler(
          this.translateService.instant('exceptions.warning'),
          InformationDialogType.fillFields);
      }
    }
  }

  private exceptionCheckEndGame(): void {
    if (this.attempt >= this.rows - 1 && !this.checkForWin()) {
      this.isGameOver = true;
      throw new GameErrorHandler(
        this.translateService.instant('game-message.lose'),
        InformationDialogType.lose);
    }
  }

  /**
   * Check win for active row.
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
   * @returns 'true' or 'false' depending on whether all values ​​in the row are black.
   */
  private checkForWin(): boolean {
    let isAllCorrect: boolean = true;

    for (let i = 0; i < this.checkGameTable[this.activeRow].length; i++) {
      if (this.checkGameTable[this.activeRow][i] !== GameCheckColor.black) {
        isAllCorrect = false;
      }
    }

    return isAllCorrect;
  }

  //#endregion

  //#region Game utility

  /**
   * Compare win combination with user color combination.
   * @returns an object that contain numbers of guessed color.
   */
  private compareTwoRows(): HitData {
    let hits: HitData = { correct: 0, incorrect: 0 };
    let grey = [];
    let black = [];

    for (let i = 0; i < this.columns; i++) {
      if (this.winCombination[i] === this.userGameTable[this.activeRow][i]) {
        hits.correct++;
        black.push(i);
      }
    }

    for (let i = 0; i < this.columns; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (
          i != j &&
          this.userGameTable[this.activeRow][j] === this.winCombination[i] &&
          black.indexOf(j) == -1 &&
          black.indexOf(i) == -1 &&
          grey.indexOf(j) == -1
        ) {
          hits.incorrect++;
          grey.push(j);
          break;
        }
      }
    }
    return hits;
  }

  /**
   * Create a empty table for game.
   * @returns an empty array of arrays.
   */
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
   * @param hits object that contain number of correct and incorrect hits.
   */
  private setCheckTable(hits: HitData) {
    for (let i = 0; i < hits.correct + hits.incorrect; i++) {
      if (i < hits.correct) {
        this.checkGameTable[this.activeRow][i] = GameCheckColor.black;
      } else {
        this.checkGameTable[this.activeRow][i] = GameCheckColor.grey;
      }
    }
  }

  /**
   * Generate random combination.
   * @returns an array that contain random combinations of colors.
   */
  private generateCombination(): GameColor[] | string[] {
    let randomCombination: GameColor[] = new Array();

    for (let i = 0; i < this.columns; i++) {
      let randomInt = this.randomInteger();
      randomCombination.push(<GameColor><unknown>GameColor[randomInt]);
    }
    return randomCombination;
  }

  /**
  * Use method to generate random number.
  * @returns random number beetwen 0 and length.
  */
  private randomInteger(): number {
    // get enum length.
    let length = Object.keys(GameColor).length / 2;

    return Math.floor(Math.random() * length);
  }

  //#endregion

}

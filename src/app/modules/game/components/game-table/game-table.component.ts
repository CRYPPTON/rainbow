import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent {

  //#region Angular stuff

  @Input() isUserTable: boolean;

  //#endregion

  constructor() { }

}

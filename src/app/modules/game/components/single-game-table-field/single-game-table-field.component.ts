import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-game-table-field',
  templateUrl: './single-game-table-field.component.html',
  styleUrls: ['./single-game-table-field.component.scss']
})
export class SingleGameTableFieldComponent {
  @Input() row: number;
  @Input() col: number;

  constructor() { }

}

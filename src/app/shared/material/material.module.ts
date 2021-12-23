import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const ngModules = [
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngModules
  ],
  exports: [
    ...ngModules
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosComponent } from './recursos/recursos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RecursosComponent
  ]
})
export class RecursosModule { }

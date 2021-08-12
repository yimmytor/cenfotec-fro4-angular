import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosComponent } from './recursos/recursos.component';
import { RecursosRoutingModule } from './recursos-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecursosComponent
  ],
  imports: [
    CommonModule,
    RecursosRoutingModule,
    FormsModule
  ],
  exports: [
    RecursosComponent
  ]
})
export class RecursosModule { }

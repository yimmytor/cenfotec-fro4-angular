import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NosotrosRoutingModule } from './nosotros-routing.module';

@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ],
  exports: [
    NosotrosComponent
  ]
})
export class NosotrosModule { }

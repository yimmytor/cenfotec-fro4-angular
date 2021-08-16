import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaComponent } from './tienda/tienda.component';


@NgModule({
  declarations: [
    TiendaComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ],
  exports: [
    TiendaComponent
  ]
})
export class TiendaModule { }

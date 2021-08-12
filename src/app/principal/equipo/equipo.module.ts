import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo/equipo.component';
import { EquipoRoutingModule } from './equipo-routing.module';


@NgModule({
  declarations: [
    EquipoComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule
  ],
  exports: [
    EquipoComponent
  ]
})
export class EquipoModule { }

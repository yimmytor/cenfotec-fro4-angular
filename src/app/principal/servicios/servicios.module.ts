import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServiciosRoutingModule } from './servicios-routing.module';

@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ],
  exports: [
    ServiciosComponent
  ]
})
export class ServiciosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { InicioModule } from './inicio/inicio.module';
import { NosotrosModule } from './nosotros/nosotros.module';
import { EquipoModule } from './equipo/equipo.module';
import { ServiciosModule } from './servicios/servicios.module';
import { RecursosModule } from './recursos/recursos.module';
import { ContactoModule } from './contacto/contacto.module';
import { ServicioFrasesService } from '../servicio-frases.service';
import { ServicioFdcService } from '../servicio-fdc.service';

@NgModule({
  declarations: [    
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PrincipalRoutingModule,
    InicioModule,
    NosotrosModule,
    EquipoModule,    
    ServiciosModule,
    RecursosModule,
    ContactoModule
  ],
  exports: [
    PrincipalComponent
  ],
  providers: [
    ServicioFrasesService,
    ServicioFdcService
  ]
})
export class PrincipalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServicioFrasesService } from '../servicio-frases.service';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    PrincipalComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PrincipalComponent
  ],
  providers: [
    ServicioFrasesService
  ]
})
export class PrincipalModule { }

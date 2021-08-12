import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    FormsModule    
  ],
  exports: [
    InicioComponent
  ]  
})
export class InicioModule { }

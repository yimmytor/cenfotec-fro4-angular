import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule    
  ],
  exports: [
    InicioComponent
  ]  
})
export class InicioModule { }

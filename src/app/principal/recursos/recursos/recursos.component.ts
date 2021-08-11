import { Component, OnInit } from '@angular/core';
import { ServicioFdcService } from 'src/app/servicio-fdc.service';
import { IFdcFood } from '../../models/fdc-food';
import { IFdcResult } from '../../models/fdc-result';
import { IFdcNutrient } from '../../models/fdc-nutrient';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  termino: string;
  resultados: Array<IFdcFood>;
  modeloNutrientes: Array<IFdcNutrient>;
  mostrarSpinner: boolean;
  sinResultados: boolean;  
  mostrarModalAlimentos: boolean;

  constructor(private servicioFdc: ServicioFdcService) {    
    this.termino = '';
    this.resultados = [];
    this.modeloNutrientes = [];
    this.mostrarSpinner = false;
    this.sinResultados = false;    
    this.mostrarModalAlimentos = false;
  }

  ngOnInit(): void { }

  realizarBusqueda(event: Event) {
    event.preventDefault();

    this.mostrarSpinner = true;
    this.resultados = [];
    this.modeloNutrientes = [];
    this.sinResultados = false;    

    this.servicioFdc.obtenerProductos(this.termino).subscribe(
      (result: IFdcResult) => {

        this.resultados = result.foods;
        this.sinResultados = this.resultados.length === 0;           

        this.mostrarSpinner = false;
      },
      (err: any) => {
        this.mostrarSpinner = false;
        console.log(err);
      }
    );
  }

  mostrarInformacionAlimento(nutrientes: Array<IFdcNutrient>) {
    this.modeloNutrientes = nutrientes;
    this.mostrarModalAlimentos = true;        
  }

  ocultarModalAlimentos() {
    this.modeloNutrientes = [];
    this.mostrarModalAlimentos = false;
  }
}

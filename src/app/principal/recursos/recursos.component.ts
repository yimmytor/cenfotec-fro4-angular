import { Component, OnInit } from '@angular/core';
import { ServicioFdcService } from 'src/app/servicio-fdc.service';
import { IFdcFood } from '../models/fdc-food';
import { IFdcResult } from '../models/fdc-result';


@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  termino: string;
  resultados: Array<IFdcFood>;
  mostrarSpinner: boolean;
  sinResultados: boolean;

  constructor(private servicioFdc: ServicioFdcService) {    
    this.termino = '';
    this.resultados = [];
    this.mostrarSpinner = false;
    this.sinResultados = false;
  }

  ngOnInit(): void { }

  realizarBusqueda(event: Event) {
    event.preventDefault();

    this.mostrarSpinner = true;
    this.resultados = [];
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
}

import { Component, OnInit } from '@angular/core';
import { ServicioFrasesService } from 'src/app/servicio-frases.service';
import { SolicitudContacto } from '../models/solicitud-contacto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  frase: string;
  clasePanel: string;
  claseFormulario: string;
  solicitud: SolicitudContacto;
  errorValidacion: boolean;
  botonesDeshabilitados: boolean;
  validacionExitosa: boolean;

  enviarSolicitud(event: Event) {
    event.preventDefault();

    if(this.solicitud.nombre === '' || this.solicitud.email === '' || this.solicitud.edad < 12) {
      this.errorValidacion = true;   

      setTimeout(() => {
        this.errorValidacion = false;
      }, 3000);
    }else{
      this.botonesDeshabilitados = true
      this.validacionExitosa = true;

      setTimeout(() => {
        this.botonesDeshabilitados = false
        this.validacionExitosa = false;

        this.cambiarClase();
      }, 3000);
      
    }
  }

  cambiarClase() {    
    this.inicializarSolicitud();

    if(this.clasePanel == 'panel-informacion' || 
    this.clasePanel == 'panel-informacion'){
      this.clasePanel = 'panel-informacion oculto';      
      this.claseFormulario = 'formulario-contacto';    
    }else{
      this.clasePanel = 'panel-informacion';      
      this.claseFormulario = 'formulario-contacto oculto';    
    }      
  }

  inicializarSolicitud() {
    this.solicitud = {
      nombre: '',
      email: '',
      genero: 'masculino',
      edad: 12
    }    
  }

  cancelarEnvioFormulario(event: Event) {
    event.preventDefault();
    
    this.cambiarClase();
  }

  constructor(private frases:ServicioFrasesService) {
    this.frase = this.frases.obtenerFrase();        
    this.clasePanel = 'panel-informacion';
    this.claseFormulario = 'formulario-contacto';    
    this.errorValidacion = false;
    this.botonesDeshabilitados = false; 
    this.validacionExitosa = false;
    this.solicitud = {
      nombre: '',
      email: '',
      genero: 'masculino',
      edad: 12
    }    
  }

  ngOnInit(): void {
    this.clasePanel = 'panel-informacion';
    this.claseFormulario = 'formulario-contacto oculto';
  }
}

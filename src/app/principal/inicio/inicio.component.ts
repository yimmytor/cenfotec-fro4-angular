import { Component, OnInit } from '@angular/core';
import { ServicioFrasesService } from 'src/app/servicio-frases.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo = "ENTRENEMOS JUNTOS";
  frase: string;

  constructor(private frases:ServicioFrasesService) {
    this.frase = this.frases.obtenerFrase();    
  }

  ngOnInit(): void {
  }

}

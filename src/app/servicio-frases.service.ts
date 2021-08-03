import { Injectable } from '@angular/core';

@Injectable()
export class ServicioFrasesService {
  frases: string[];

  constructor() {
    this.frases= [
      'La derrota no es el peor de los fracasos, no intentarlo es el verdadero fracaso.',
      'No tienes que estar en forma para iniciar pero debes iniciar para estar en forma.',
      'La realidad es bastante simple, lo haces o no lo haces.',
      'No eres lo que logras, eres lo que superas.',
      'Lo que encaramos parece insuperable, pero somos más fuertes de lo que creemos.',
      'Cuida tu cuerpo, es el único lugar que tienes para vivir.',
      'Fijar objetivos es el primer paso para convertir lo imposible en posible.',
      'No dejes que el mundo exterior determine quien eres en esta vida.',
      'El dolor que sientes hoy es la fuerza que sentirás mañana.',
      'El miedo es la muralla que separa lo que eres de lo que podrías ser.'
    ]
  }

  public obtenerFrase(): string {
    let frase = '';
    let max = this.frases.length;
    let posicionAleatoria = Math.floor((Math.random() * (max - 0) + 0));

    if(this.frases.length > 0) {
      frase = this.frases[posicionAleatoria];    
      console.log(posicionAleatoria);
    }

    return frase;
  }
}

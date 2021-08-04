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
      'El miedo es la muralla que separa lo que eres de lo que podrías ser.',
      'Si no tienes confianza, siempre encontrarás una forma de no ganar.',
      'Asegúrate que tu peor enemigo no vive en medio de tus dos orejas.',
      'No se trata de si te derriban, se trata de si te levantas.',
      'Lo que te falta de talento lo puedes contrarrestar con deseo, trabajo y dando el 110% todo el tiempo.',
      'Si entrenas duro, no solo serás duro, serás duro de superar.',
      '¡Nunca te rindas! El fracaso y el rechazo son sólo el primer paso para tener éxito.',
      'No te rindas. Sufre ahora y vive el resto de tu vida como un campeón.',
      'Aunque nadie puede volver atrás y hacer un nuevo comienzo, cualquiera puede comenzar a partir de ahora y crear un nuevo final.',
      'Lo único que se interpone entre ti y tu sueño, es la voluntad de intentarlo y la creencia de que en realidad es posible.'
    ]
  }

  public obtenerFrase(): string {
    let frase = '';
    let max = this.frases.length;
    let posicionAleatoria = Math.floor((Math.random() * (max - 0) + 0));

    if(this.frases.length > 0) {
      frase = this.frases[posicionAleatoria];          
    }

    return frase;
  }
}

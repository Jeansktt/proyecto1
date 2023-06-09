'use strict';

const pregunta = document.querySelector('#pregunta');
const respuestaCero = document.querySelector('#r0');
const respuestaUno = document.querySelector('#r1');
const respuestaDos = document.querySelector('#r2');
const respuestaTres = document.querySelector('#r3');
const aciertos = document.querySelector('#aciertos');
const fallos = document.querySelector('#fallos');
const rondas = document.querySelector('#rondas');
const resultado = document.querySelector('#resultado');

let acierto = 0;
let error = 0;
let contador = 1;

async function main() {
  const response = await fetch('../quiz.json');

  if (response.ok) {
    const questions = await response.json();

    let index = 0;

    pregunta.innerHTML = `${questions[index].question}`;
    respuestaCero.innerHTML = `${questions[index].answers[0]}`;
    respuestaUno.innerHTML = `${questions[index].answers[1]}`;
    respuestaDos.innerHTML = `${questions[index].answers[2]}`;
    respuestaTres.innerHTML = `${questions[index].answers[3]}`;
    aciertos.innerHTML = ` ${acierto}`;
    fallos.innerHTML = ` ${error}`;
    rondas.innerHTML = `Ronda: ${contador}`;

    const questionMaker = (answerNum) => {
      if (questions[index].answers[answerNum] === questions[index].correct) {
        acierto++;
        contador++;
        index++;

        aciertos.innerHTML = `${acierto}`;
      } else {
        error++;
        contador++;
        index++;

        fallos.innerHTML = `${error}`;
      }

      if (index >= 50) {
        rondas.remove();
        aciertos.remove();
        fallos.remove();
        respuestaCero.remove();
        respuestaUno.remove();
        respuestaDos.remove();
        respuestaTres.remove();
        pregunta.innerHTML = `Su puntuación es de ${acierto} de 50`;
      } else {
        pregunta.innerHTML = `${questions[index].question}`;
        respuestaCero.innerHTML = `${questions[index].answers[0]}`;
        respuestaUno.innerHTML = `${questions[index].answers[1]}`;
        respuestaDos.innerHTML = `${questions[index].answers[2]}`;
        respuestaTres.innerHTML = `${questions[index].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
      }
    };

    respuestaCero.addEventListener('click', () => {
      questionMaker(0);
    });

    respuestaUno.addEventListener('click', () => {
      questionMaker(1);
    });

    respuestaDos.addEventListener('click', () => {
      questionMaker(2);
    });

    respuestaTres.addEventListener('click', () => {
      questionMaker(3);
    });
  } else {
    console.error('Error en la peticion');
  }
}
main();

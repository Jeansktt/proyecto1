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
const cabecera = document.querySelector('#contadores');
const button = document.querySelector('button');

let acierto = 0;
let error = 0;
let contador = 1;

let button_correspondiente = [
  respuestaCero,
  respuestaUno,
  respuestaDos,
  respuestaTres,
];

async function main() {
  const response = await fetch('./quiz.json');

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
    rondas.innerHTML = `${contador}/50`;

    const questionMaker = (answerNum) => {
      setTimeout(() => {
        if (questions[index].answers[answerNum] === questions[index].correct) {
          // button.style.color = 'white';
          // button.style.background = 'green';
          index++;
          acierto++;
          contador++;

          aciertos.innerHTML = `${acierto}`;
        } else {
          // button.style.color = 'white';
          // button.style.background = 'red';
          index++;
          error++;
          contador++;

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
          contadores.remove();

          pregunta.innerHTML = `Su puntuación es de ${acierto} de 50`;
        } else {
          pregunta.innerHTML = `${questions[index].question}`;
          respuestaCero.innerHTML = `${questions[index].answers[0]}`;
          respuestaUno.innerHTML = `${questions[index].answers[1]}`;
          respuestaDos.innerHTML = `${questions[index].answers[2]}`;
          respuestaTres.innerHTML = `${questions[index].answers[3]}`;
          rondas.innerHTML = `${contador}/50`;
        }
      }, 1500);
    };

    if (questionMaker === true) {
      button.style.background = 'green';
    } else {
      button.style.backgroun = 'red';
    }

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

// ##############################################################################
// ######################           PRUEBAS           ###########################
// ##############################################################################
/* /* button.classList.add('correct');
setTimeout(() => {
  button.classList.remove('correct');
}, 3000) */

/* button.classList.add('incorrect');

setTimeout(() => {
  button.classList.remove('incorrect');
}, 3000); */

/* let button_correspondiente = [
  respuestaCero,
  respuestaUno,
  respuestaDos,
  respuestaTres
]
*/
button.style.color('correct');
button.style.color('incorrect');

if (aciertos === answerNum) {
  button.style.background = 'green';
} else {
  button.style.background = 'red';
}

function cambiarColores() {
  if (posibles_respuestas[i] === pregunta.respuesta) {
    button_correspondiente[i].style.background = 'green';
  } else {
    button_correspondiente[i].style.background = 'red';
  }
  setTimeout(() => {
    reiniciarColores();
  }, 2000);
}
function reiniciarColores() {
  for (const btn of button_correspondiente) {
    button.style.background = 'white';
  }
}

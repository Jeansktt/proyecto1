'use strict';

'use strict';

let acierto = 0;
let error = 0;
let contador = 1;

async function main() {
  const response = await fetch('/quiz.json');

  if (response.ok) {
    const texto = await response.json();
    console.log(texto);

    let azar = 0;
    console.log(azar);

    const pregunta = document.querySelector('#pregunta');
    pregunta.innerHTML = `${texto[azar].question}`;

    const respuestaCero = document.querySelector('#r0');
    respuestaCero.innerHTML = `${texto[azar].answers[0]}`;

    const respuestaUno = document.querySelector('#r1');
    respuestaUno.innerHTML = `${texto[azar].answers[1]}`;

    const respuestaDos = document.querySelector('#r2');
    respuestaDos.innerHTML = `${texto[azar].answers[2]}`;

    const respuestaTres = document.querySelector('#r3');
    respuestaTres.innerHTML = `${texto[azar].answers[3]}`;

    const aciertos = document.querySelector('#aciertos');
    aciertos.innerHTML = `Aciertos: ${acierto}`;

    const fallos = document.querySelector('#fallos');
    fallos.innerHTML = `Fallos: ${error}`;

    const rondas = document.querySelector('#rondas');
    rondas.innerHTML = `Ronda: ${contador}`;

    const resultado = document.querySelector('#resultado');

    //const respuestaReal = document.querySelector('#resCo');

    respuestaCero.addEventListener('click', (e) => {
      if (texto[azar].answers[0] === texto[azar].correct) {
        acierto++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        aciertos.innerHTML = `Aciertos: ${acierto}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      } else {
        error++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        fallos.innerHTML = `Fallos: ${error}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      }
    });

    respuestaUno.addEventListener('click', (e) => {
      if (texto[azar].answers[1] === texto[azar].correct) {
        acierto++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        aciertos.innerHTML = `Aciertos: ${acierto}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      } else {
        error++;
        contador++;
        azar++;
        console.log(azar);
        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        fallos.innerHTML = `Fallos: ${error}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      }
    });

    respuestaDos.addEventListener('click', (e) => {
      if (texto[azar].answers[2] === texto[azar].correct) {
        acierto++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        aciertos.innerHTML = `Aciertos: ${acierto}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      } else {
        error++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        fallos.innerHTML = `Fallos: ${error}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      }
    });

    respuestaTres.addEventListener('click', (e) => {
      if (texto[azar].answers[3] === texto[azar].correct) {
        acierto++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        aciertos.innerHTML = `Aciertos: ${acierto}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      } else {
        error++;
        contador++;
        azar++;
        console.log(azar);

        pregunta.innerHTML = `${texto[azar].question}`;
        respuestaCero.innerHTML = `${texto[azar].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar].answers[3]}`;
        rondas.innerHTML = `Ronda: ${contador}`;
        fallos.innerHTML = `Fallos: ${error}`;
        if (azar >= 50) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.innerHTML = `Su puntuación es de ${acierto} de 10`;
        }
      }
    });
  } else {
    console.error('Error en la peticion');
  }
}
main();

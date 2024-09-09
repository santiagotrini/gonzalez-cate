let numeroCorrecto = 1 + Math.floor(Math.random() * 100);
console.log(numeroCorrecto);
let numeroPreguntas = 0;

function handleClick(event) {
  // console.log(event.target);
  numeroCorrecto = 1 + Math.floor(Math.random() * 100);
  console.log(numeroCorrecto);
  document.querySelector('h2').textContent = '0 preguntas';
  document.querySelector('#resultado').textContent = '';
  numeroPreguntas = 0;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  let formulario = event.target;
  console.log(formulario.numero.value);
  let eleccion = event.target.numero.value; 
  let h1 = document.querySelector('#resultado');
  numeroPreguntas++;
  let h2 = document.querySelector('h2');
  if (numeroPreguntas == 1)
    h2.textContent = `${numeroPreguntas} pregunta`;
  else 
    h2.textContent = `${numeroPreguntas} preguntas`;
  if (numeroCorrecto < eleccion)
    h1.textContent = 'Te pasaste';
  else if (numeroCorrecto > eleccion)
    h1.textContent = 'Un poco más';
  else
    h1.textContent = 'Le pegaste!'  
  event.target.reset();
}

function createParagraph() {
  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum sit dolor amet ...';
  document.body.append(p);
}
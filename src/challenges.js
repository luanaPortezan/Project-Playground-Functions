// Desafio 1-------------------------------------

function compareTrue(mammal1, mammal2) {
  if (mammal1 === true && mammal2 === true) {
    return true;
  }
  return false;
}

// Desafio 2-------------------------------------
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3-------------------------------------
function splitSentence(phrases) {
  let word = [''];
  word = phrases.split(" ");
  return word;
}

// Desafio 4-------------------------------------
function concatName(array) {
  let firstWord = array[0];
  let lastword = array[array.length - 1];

  return lastword + ", " + firstWord;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5-------------------------------------
function footballPoints() {
  // seu código aqui
}

// Desafio 6-------------------------------------
function highestCount() {
  // seu código aqui
}

// Desafio 7-------------------------------------
function catAndMouse() {
  // seu código aqui
}

// Desafio 8-------------------------------------
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9-------------------------------------
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10-------------------------------------
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
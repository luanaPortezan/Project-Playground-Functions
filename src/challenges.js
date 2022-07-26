// Desafio 1-------------------------------------

function compareTrue(mammal1, mammal2) {
  if (mammal1 === true && mammal2 === true) {
    return true
  } else {
    return false
  }
}
//console.log(compareTrue(horse, cat)); //true
//console.log(compareTrue(horse, unicornio)) //false


// Desafio 2-------------------------------------

function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}
// console.log(calcArea (10, 50));
// console.log(calcArea (5, 2));
// console.log(calcArea (51, 1));

// Desafio 3-------------------------------------
function splitSentence(phrases) {
  let word = [''];
  word = phrases.split(" ");
  return word;
}

//console.log(splitSentence('go trybe"'));

// Desafio 4-------------------------------------
function concatName() {
  // seu código aqui
}

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

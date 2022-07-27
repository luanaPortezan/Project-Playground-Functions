// Desafio 1-------------------------------------
// tabela da verdade
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
  let lastWord = array[array.length - 1];
  return lastWord + ", " + firstWord;
}

// Desafio 5-------------------------------------
function footballPoints(wins, ties) {
  let amountPoints = 0;
  amountPoints = (wins * 3) + (ties * 1);
  return amountPoints;
}

// Desafio 6-------------------------------------
// primeiro passo descobrir o maior número.
// segundo passo saber a frequência que ele aparece.
function highestCount(array) {
  let frequency = 0;
  let highestNumber = [0];

  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (highestNumber === array[i]) {
      frequency += 1;
    }
  }
  return frequency;
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
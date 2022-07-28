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
function highestCount(array) {
  let highestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  // segundo passo saber a frequência que ele aparece.
  let frequency = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highestNumber) {
      frequency += 1;
    }
  }
  return frequency;
}

// Desafio 7-------------------------------------
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2 || cat2 - mouse === cat1 || cat1 - mouse === cat2 || cat1 + mouse === cat2 - mouse) {
    return "os gatos trombam e o rato foge"; // todas possibilidades dos gatos trombarem
  } else if (cat1 + mouse < cat2 + mouse) {
    return "cat1"; // gato1 pega o rato
  }
    return "cat2"; // gato2 pega o rato
}

// Desafio 8-------------------------------------
function fizzBuzz(array) {
  let numbersArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      numbersArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      numbersArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      numbersArray.push('fizz');
    } else if (array[index] % 3 !== 0 || array % 5 !== 0) {
      numbersArray.push('bug!');
    }
  }
  return numbersArray;
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
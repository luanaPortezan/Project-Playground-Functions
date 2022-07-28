// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// Pesquisa realizada em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC 
    && lineB < lineA + lineB 
    && lineC < lineA + lineC 
    && lineA > Math.abs(lineB - lineC) 
    && lineB > Math.abs(lineA - lineB) 
    && lineC > Math.abs(lineA - lineC)) {
    return true;
  }
    return false;
  }

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

import inputMath from '../data/math.js';

const math = inputMath.split('\n');

function isSeparator(index) {
  for (let i = 0; i < math.length; i++) {
    if (math[i][index] !== ' ') return false;
  }
  return true;
}

let numbers = [];
let numbersRow = [];
let number = '';
let separator = false;
for (let j = 0; j < math[0].length; j++) {
  separator = false;
  numbersRow = [];
  for (let i = 0; i < math.length - 1; i++) {
    if (isSeparator(j)) {
      number = '';
      separator = true;
    } else {
      number += math[i][j];
    }
  }
  if (!separator) {
    numbersRow.push(number);
    number = '';
    separator = false;
  }
  numbers.push(numbersRow);
}

const splitNumbers = [];
let row = [];
numbers.push([]);
numbers.forEach(n => {
  if (n.length !== 0) {
    row.push(n[0]);
  } else {
    splitNumbers.push(row);
    row = [];
  }
});

const sign = math[math.length - 1].split(/\s+/);

let results = [];
splitNumbers.forEach((row, index) => {
  const r = row.map(Number);
  if (sign[index] === '+') {
    results.push(r.reduce((acc, n) => acc + n, 0));
  }
  if (sign[index] === '*') {
    results.push(r.reduce((acc, n) => acc * n, 1));
  }
});

console.log(results.reduce((acc, n) => acc + n, 0));

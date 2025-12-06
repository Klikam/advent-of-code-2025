import math from '../data/math.js';

let results = [];

for (let i = 0; i < math[0].length; i++) {
  let addResult = 0;
  let multiplyResult = 1;

  for (let j = 0; j < math.length - 1; j++) {
    if (math[math.length - 1][i] === '+') {
      addResult += +math[j][i];
    } else if (math[math.length - 1][i] === '*') {
      multiplyResult *= +math[j][i];
    }
  }
  results.push(addResult ? addResult : multiplyResult);
}

console.log(results.reduce((acc, n) => acc + n, 0));

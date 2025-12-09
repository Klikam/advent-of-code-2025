import inputMath from '../data/test.js';
// import math from '../data/math.js';

let math = inputMath.split('\n').map(k);
console.log(math);

let results = [];
let numbers = [];

for (let i = 0; i < math[0].length; i++) {
  let addResult = 0;
  let multiplyResult = 1;
  let partialNumber = [];
  console.log(`=====`);

  for (let k = 0; k < math.length - 1; k++) {
    let number = '';
    for (let j = 0; j < math.length - 1; j++) {
      number += math[j][i].slice(-1);
      math[j][i] = math[j][i].slice(0, -1);

      // if (math[math.length - 1][i] === '+') {
      //   console.log(math[j]);
      //   console.log(j, i, math[j][i]);
      //   addResult += +math[j][i];
      // } else if (math[math.length - 1][i] === '*') {
      //   console.log(j, i, math[j][i]);
      //   multiplyResult *= +math[j][i];
      // }
    }
    partialNumber.push(number);
  }
  numbers.push(partialNumber);
  results.push(addResult ? addResult : multiplyResult);
}

console.log(numbers);
console.log(results);
console.log(results.reduce((acc, n) => acc + n, 0));

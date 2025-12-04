import batteries from '../data/batteries.js';

let joltage = [];

const splittedBattery = batteries.map(battery => battery.split(''));

splittedBattery.forEach(arr => {
  const digits = Array.from({ length: 12 }, () => '0');

  let digitsIndex = 0;

  for (let i = 0; i < 12; i++) {
    let bestDigit = 0;
    let bestDigitIndex = digitsIndex;

    for (let j = digitsIndex; j <= arr.length - 12 + i; j++) {
      if (+arr[j] > bestDigit) {
        bestDigit = arr[j];
        bestDigitIndex = j;
      }
    }

    digits[i] = bestDigit;
    digitsIndex = bestDigitIndex + 1;
  }

  joltage.push(digits);
});

console.log(joltage);
console.log(
  joltage
    .map(digit => digit.join(''))
    .map(Number)
    .reduce((acc, joltage) => acc + joltage, 0)
);

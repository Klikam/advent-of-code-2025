import batteries from '../data/batteries.js';
import test from '../data/testData.js';

let joltage = [];

const splittedBattery = test.map(battery => battery.split(''));

splittedBattery.forEach(arr => {
  let firstDigit, secondDigit;
  firstDigit = secondDigit = 0;
  arr.forEach((el, index, all) => {
    if (+el > firstDigit && index < all.length - 1) {
      firstDigit = el;
      secondDigit = all[index + 1];
    } else if (+el > secondDigit) {
      secondDigit = el;
    }
  });
  joltage.push(firstDigit.toString() + secondDigit.toString());
});

console.log(joltage);

// console.log(joltage.reduce((acc, joltage) => acc + joltage));

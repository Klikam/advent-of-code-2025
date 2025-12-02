import ranges from '../data/ranges.js';

console.log(ranges);
console.log('=====');

const invalidIds = [];

const isInRange = (number, limit) => limit - number >= 0;

const isEven = number => number % 2 === 0;

const hasPattern = number => {
  if (number.toString().length < 2) {
    return false;
  }
  if (!isEven(number.toString().length)) {
    const splittedNumber = number.toString().split('');
    return splittedNumber.every(letter => letter === splittedNumber[0]);
  }
  return false;
};

ranges.forEach((range, index) => {
  let start = +range[0];
  const limit = +range[1];
  const invalidIdsForRange = [];

  while (true) {
    if (!isInRange(start, limit)) {
      break;
    }
    if (hasPattern(start)) {
      invalidIdsForRange.push(start);
    }
    start++;
  }

  invalidIds.push(invalidIdsForRange);
});

console.log(invalidIds);

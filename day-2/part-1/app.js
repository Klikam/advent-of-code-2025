import ranges from '../data/ranges.js';

const invalidIds = [];

const isInRange = (number, limit) => limit - number >= 0;

const isEven = number => number % 2 === 0;

const hasPattern = num => {
  const number = num.toString();
  if (isEven(number.length)) {
    return (
      number.slice(0, number.length / 2) === number.slice(number.length / 2)
    );
  }
  return false;
};

ranges.forEach(range => {
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

console.log(invalidIds.flat().reduce((acc, number) => acc + number));

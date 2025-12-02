import ranges from '../data/ranges.js';

const invalidIds = [];

const isInRange = (number, limit) => limit - number >= 0;

function checkPossibleSubstrings(num) {
  const number = num.toString();
  let possibleSubstringsLen = [];
  for (let i = 1; i < Math.floor(number.length / 2) + 1; i++) {
    if (number.length % i === 0) {
      possibleSubstringsLen.push(i);
    }
  }
  return possibleSubstringsLen;
}

function generateSubstrings(num, len) {
  let number = num.toString();
  let subs = [];
  while (number !== '') {
    subs.push(number.slice(0, len));
    number = number.slice(len);
  }
  return subs;
}

ranges.forEach(range => {
  let start = +range[0];
  const limit = +range[1];
  const invalidIdsForRange = [];

  while (true) {
    if (!isInRange(start, limit)) {
      break;
    }
    const possibleSubstringsLen = checkPossibleSubstrings(start);
    possibleSubstringsLen.forEach(subLen => {
      const substrings = generateSubstrings(start, subLen);
      if (substrings.every(sub => sub === substrings[0])) {
        if (!invalidIdsForRange.includes(start)) {
          invalidIdsForRange.push(start);
        }
      }
    });

    start++;
  }

  invalidIds.push(invalidIdsForRange);
});

console.log(invalidIds.flat().reduce((acc, number) => acc + number));

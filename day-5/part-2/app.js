import { ranges } from '../data/productIds.js';

let mergedRanges = [...ranges.sort((a, b) => a[0] - b[0])];
let modified = true;

while (modified) {
  let i = 0;
  modified = false;
  for (i; i < mergedRanges.length - 1; i++) {
    if (
      mergedRanges[i + 1][0] <= mergedRanges[i][0] &&
      mergedRanges[i + 1][1] <= mergedRanges[i][1] &&
      mergedRanges[i + 1][1] >= mergedRanges[i][0]
    ) {
      mergedRanges[i][0] = mergedRanges[i + 1][0];
      mergedRanges.splice(i + 1, 1);
      modified = true;
      break;
    } else if (
      mergedRanges[i + 1][0] >= mergedRanges[i][0] &&
      mergedRanges[i + 1][1] >= mergedRanges[i][1] &&
      mergedRanges[i + 1][0] <= mergedRanges[i][1]
    ) {
      mergedRanges[i][1] = mergedRanges[i + 1][1];
      mergedRanges.splice(i + 1, 1);
      modified = true;
      break;
    } else if (
      mergedRanges[i + 1][0] >= mergedRanges[i][0] &&
      mergedRanges[i + 1][1] <= mergedRanges[i][1]
    ) {
      mergedRanges.splice(i + 1, 1);
      modified = true;
      break;
    } else if (
      mergedRanges[i + 1][0] <= mergedRanges[i][0] &&
      mergedRanges[i + 1][1] >= mergedRanges[i][1]
    ) {
      mergedRanges.splice(i, 1);
      modified = true;
      break;
    }
  }
}

let result = 0;
mergedRanges.forEach(range => (result += range[1] - range[0] + 1));
console.log(result);

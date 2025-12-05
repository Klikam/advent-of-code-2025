import { ranges, ids } from '../data/productIds.js';

let freshIds = [];

function inRange(range, id) {
  return id >= range[0] && id <= range[1];
}

ids.forEach(id => {
  ranges.forEach(range => {
    if (inRange(range, id)) {
      if (!freshIds.includes(id)) freshIds.push(id);
    }
  });
});

console.log(freshIds.length);

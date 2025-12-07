import inputBeam from '../data/beam.js';

const beam = inputBeam.split('\n');

let splits = 0;
let currentBeam = [beam[0].indexOf('S')];

for (let i = 1; i < beam.length; i++) {
  let nextRowBeam = [];
  currentBeam.forEach(curr => {
    if (beam[i][curr] === '^') {
      splits++;
      !nextRowBeam.includes(curr - 1) && nextRowBeam.push(curr - 1);
      !nextRowBeam.includes(curr + 1) && nextRowBeam.push(curr + 1);
    } else {
      !nextRowBeam.includes(curr) && nextRowBeam.push(curr);
    }
  });
  currentBeam = [...nextRowBeam];
}

console.log(splits);

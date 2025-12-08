import inputBeam from '../data/beam.js';

const beam = inputBeam.split('\n');

let beamsCounts = {
  [beam[0].indexOf('S')]: 1,
};

for (let i = 0; i < beam.length; i++) {
  const nextRowCounts = {};

  Object.keys(beamsCounts).forEach(key => {
    const count = beamsCounts[key];
    if (beam[i][key] === '^') {
      let index = +key - 1;
      nextRowCounts[index] = (nextRowCounts[index] || 0) + count;

      index = +key + 1;
      nextRowCounts[index] = (nextRowCounts[index] || 0) + count;
    } else {
      nextRowCounts[key] = (nextRowCounts[key] || 0) + count;
    }
  });

  beamsCounts = nextRowCounts;
}

console.log(Object.values(beamsCounts).reduce((acc, v) => acc + v, 0));

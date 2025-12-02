import rotations from '../data/dialInput.js';

let position = 50;
let zeros = 0;

function moveRight(currentPosition, distance) {
  let newPosition = currentPosition + distance;
  while (newPosition > 99) {
    newPosition -= 100;
    zeros++;
  }

  // decreasing number of zeros to avoid calculating the same zero twice
  if (newPosition === 0) {
    zeros--;
  }

  return newPosition;
}

function moveLeft(currentPosition, distance) {
  let newPosition = currentPosition - distance;

  // decreasing number of zeros to avoid calculating the same zero twice
  if (currentPosition === 0) {
    zeros--;
  }

  while (newPosition < 0) {
    newPosition += 100;
    zeros++;
  }

  return newPosition;
}

rotations.forEach(move => {
  const direction = move.slice(0, 1);

  if (direction === 'R') {
    position = moveRight(position, +move.slice(1));
  } else if (direction === 'L') {
    position = moveLeft(position, +move.slice(1));
  } else {
    throw new Error('Unknown direction');
  }

  if (position === 0) {
    zeros++;
  }
});

console.log(`Number of zeros is ${zeros}`);

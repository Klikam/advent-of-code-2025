import papers from '../data/papers.js';

const grid = papers.map(row => row.split(''));

let rolsCanBeAccessed = 0;

function isPaper(row, col) {
  return grid?.[row]?.[col] === '@' ? 1 : 0;
}

for (let row = 0; row < grid.length; row++) {
  for (let column = 0; column < grid[row].length; column++) {
    if (isPaper(row, column)) {
      let adjacentPapers = 0;

      // check above
      adjacentPapers += isPaper(row - 1, column - 1);
      adjacentPapers += isPaper(row - 1, column);
      adjacentPapers += isPaper(row - 1, column + 1);

      // check in row
      adjacentPapers += isPaper(row, column - 1);
      adjacentPapers += isPaper(row, column + 1);

      // check below
      adjacentPapers += isPaper(row + 1, column - 1);
      adjacentPapers += isPaper(row + 1, column);
      adjacentPapers += isPaper(row + 1, column + 1);

      if (adjacentPapers < 4) {
        rolsCanBeAccessed++;
      }
    }
  }
}

console.log(rolsCanBeAccessed);

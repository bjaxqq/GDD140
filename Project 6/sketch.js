let cellSize = 10;
let numRows, numCols;
let grid, nextGrid;

function setup() {
  createCanvas(500, 500);
  numRows = height / cellSize;
  numCols = width / cellSize;
  grid = new Array(numRows);
  nextGrid = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    grid[i] = new Array(numCols);
    nextGrid[i] = new Array(numCols);
    for (let j = 0; j < numCols; j++) {
      grid[i][j] = floor(random(2));
      nextGrid[i][j] = 0;
    }
  }
}

function draw() {
  background(255);
  drawGrid();
  updateGrid();
}

function drawGrid() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === 1) {
        fill(random(255), 0, 255);
      } else {
        fill(0);
      }
      rect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
}

function updateGrid() {
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let neighbors = countNeighbors(i, j);
      if (grid[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        nextGrid[i][j] = 1;
      } else if (grid[i][j] === 0 && neighbors === 3) {
        nextGrid[i][j] = 1;
      } else {
        nextGrid[i][j] = 0;
      }
    }
  }
  let temp = grid;
  grid = nextGrid;
  nextGrid = temp;
}

function countNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let r = (row + i + numRows) % numRows;
      let c = (col + j + numCols) % numCols;
      count += grid[r][c];
    }
  }
  count -= grid[row][col];
  return count;
}
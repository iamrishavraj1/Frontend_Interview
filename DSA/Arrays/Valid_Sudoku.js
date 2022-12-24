const soltuion = () => {
  let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  let n = board.length;
  console.log(isValidConfig(board, n));
};

const notInRow = (board, n, row) => {
  let rowSet = new Set();
  for (let i = 0; i < n; i++) {
    if (rowSet.has(board[row][i])) {
      return false;
    }

    if (board[row][i] != ".") {
      rowSet.add(board[row][i]);
    }
  }
  return true;
};

const notInColumn = (board, n, column) => {
  let columnSet = new Set();
  for (let i = 0; i < n; i++) {
    if (columnSet.has(board[i][column])) {
      return false;
    }
    if (board[i][column] != ".") {
      columnSet.add(board[i][column]);
    }
  }
};

const notInBox = (board, startRow, startColumn) => {
  let boxSet = new Set();
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      let number = board[row + startRow][column + startColumn];
      if (boxSet.has(number)) {
        return false;
      }
      if (number != ".") {
        boxSet.add(number);
      }
    }
  }
  return true;
};

const isValid = (board, n, row, column) => {
  return (
    notInRow(board, n, row) &&
    notInColumn(board, n, column) &&
    notInBox(board, row - (row % 3), column - (col % 3))
  );
};

const isValidConfig = (board, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!isValid(board, i, j)) {
        console.log(false);
      }
    }
  }
  console.log(true);
};

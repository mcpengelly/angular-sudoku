export class SolverService {
  constructor() { }

  checkRow(board, row, checkValue){
    if(row > 8) throw new Error('max index is 8');
    var validInput = true;
    for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board.length; j++){
        if(board[row][j] === checkValue){
          validInput = false;
        }
      }
    }
    return validInput;
  }

  checkColumn(board, column, checkValue){
    if(column > 8) throw new Error('max index is 8');
    var validInput = true;
    for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board.length; j++){
        if(board[i][column] === checkValue){
          validInput = false;
        }
      }
    }
    return validInput;
  }

  check3x3Square(board, row, column, checkValue){
    if(row > 8 || column > 8) throw new Error('max index is 8');
    var validInput = true;

    // modulo can ensure that row/column indicies = 0 or 3 or 6
    var startRowIndex = row - row % 3;
    var startColumnIndex = column - column % 3;

    // which allows iterating the 3x3 cells with a nested for loop of 3x3
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if(board[startRowIndex + i][startColumnIndex + j] === checkValue){
          validInput = false;
        }
      }
    }
    return validInput;
  }

  findEmptySquares(board){
    var emptySquares = [];

    for(var i = 0; i < board.length; i++){
      for(var j = 0; j < board.length; j++){
        // push the coordinates of each square location to an array
        if(board[i][j] === 0) {
          emptySquares.push([i,j]);
        }
      }
    }
    return emptySquares;
  }

  solve(sBoard){
    var board = sBoard.map((x)=>x.map((x)=>x)); // clone the board
    console.log('--- Original Board ---');
    console.log(board)
    // we need to distinguish which spaces need to be filled
    var emptySquares = this.findEmptySquares(board);
    // console.log('emptySquares', emptySquares);

    var limit = 9;
    var value;
    //go through empty squares,
    for(var i = 0; i < emptySquares.length;){
      var found = false;
      var row = emptySquares[i][0];
      var column = emptySquares[i][1];
      value = board[row][column] + 1; // ?

      while(!found && value <= limit){
        if(this.checkRow(board, row, value) &&
          this.checkColumn(board, column, value) &&
          this.check3x3Square(board, row, column, value)
        ){
          found = true;
          board[row][column] = value;
          i++;
        }
        else {
          value++;
        }
      }

      if(!found){
        board[row][column] = 0;
        i--;
      }
    }

    console.log('--- Solved Board ---');
    return board;
  }
}

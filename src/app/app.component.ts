import { Component } from '@angular/core';
import { SudokuBoardDirective } from './shared/sudokuboard.directive';
import { SolverService } from './solver.service';

@Component({
  selector: 'my-app',
  template: `
    <div align="center">
      <sudoku-board [board]="unsolvedBoard"></sudoku-board>
      <input (click)=onSolveClick() type="button" value="Solve" />
      <input (click)=onResetClick() type="button" value="Reset" />
      <sudoku-board [board]="resultBoard"></sudoku-board>
      <div id="extra-controls">
        <input #sudokuInput type="text"/>
        <input (click)=onPopulateClick(sudokuInput.value) type="button" value="Populate Sudoku" />
      </div>
    </div>
    `,
    providers: [SolverService]
})

export class AppComponent {
  constructor(private solver: SolverService){}
  unsolvedBoard = [
      [1, 2, 3,  9, 0, 0,  4, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 5, 0],
      [0, 0, 0,  0, 0, 0,  0, 1, 0],

      [4, 0, 0,  5, 0, 0,  6, 0, 0],
      [0, 0, 0,  0, 9, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],

      [7, 0, 0,  8, 0, 0,  9, 0, 0],
      [0, 1, 0,  0, 7, 0,  0, 0, 0],
      [0, 0, 2,  0, 0, 0,  0, 0, 6]
  ];
  resultBoard = [
      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],

      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],

      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0],
      [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ];

  onSolveClick(): void {
    this.resultBoard = this.solver.solve(this.unsolvedBoard); //SolverService
  }
  onResetClick(): void {
    this.resultBoard = Array(9).fill(Array(9).fill(0));
  }
  onPopulateClick(sudokuPuzzle: string): void {
    let board = sudokuPuzzle
      .split(',')
      .map((rows) => {
        return rows.split('').map((value)=>parseInt(value));
      });

    // only put the board up if its valid
    if(board.length === 9 || board[0].length === 9){
      this.unsolvedBoard = board;
    }
    else {
      console.log('Invalid board input');
    }
  }
}

// sample puzzles
// 070920405,000007806,450600000,005002009,040305002,030076000,069000004,000000000,000030900
// 020740005,304060100,000009060,430000500,070000004,000000093,060001000,005400020,200000006
// 000020019,004000000,001800350,038000920,000000431,000000006,500900000,103600800,200185090


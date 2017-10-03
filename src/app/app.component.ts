import { Component } from '@angular/core';
import { SudokuBoardDirective } from './shared/sudokuboard.directive';

@Component({
  selector: 'my-app',
  template: `
    <div align="center">
      <h1>{{title}}</h1>
      <sudoku-board [board]="unsolvedBoard"></sudoku-board>
      <input (click)=onSolveClick() type="button" value="Solve" />
      <input (click)=onResetClick() type="button" value="Reset" />
      <sudoku-board [board]="emptyBoard"></sudoku-board>
    </div>
    `
    //providers: [SolverService] (?)
})

export class AppComponent {
  title = 'Sudoku';
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
  emptyBoard = [
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
    console.log('clicked');
  }
  onResetClick(): void {
    console.log('clicked.');
  }
}

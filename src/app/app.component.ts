import { Component } from '@angular/core';
import { SudokuBoardDirective } from './shared/sudokuboard.directive';
import { SolverService } from './solver.service';

@Component({
  selector: 'my-app',
  template: `
    <div align="center">
      <h1>{{title}}</h1>
      <sudoku-board [board]="unsolvedBoard"></sudoku-board>
      <input (click)=onSolveClick() type="button" value="Solve" />
      <input (click)=onResetClick() type="button" value="Reset" />
      <sudoku-board [board]="resultBoard"></sudoku-board>
    </div>
    `,
    providers: [SolverService]
})

export class AppComponent {
  constructor(
  private solver: SolverService){}

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
}

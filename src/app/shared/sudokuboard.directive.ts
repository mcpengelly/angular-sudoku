// ./app/shared/hidden.directive.ts
import { Component, Directive, ElementRef, Input, Renderer } from '@angular/core';

@Component({
  selector: 'sudoku-board',
  template: `
      <span>
        <div *ngFor="let row of board" id="rows">
          <input
            *ngFor="let square of row"
            id="columns"
            type="text"
            value={{square}}
            maxlength=1
          />
        </div>
      </span>
    `,
  styles: [`
      span { display: inline-block; }
      #columns {
        height: 35px;
        width: 35px;
        border:1px solid;
        border-color: grey;
      }
      #columns:first-child {
        border-left:solid;
      }
      #columns:nth-child(3n) {
        border-right:solid ;
      }
      #rows:first-child {
        border-top:solid;
      }
      #rows:nth-child(3n) #columns {
        border-bottom:solid;
      }
    `]
})

export class SudokuBoardDirective {
  @Input() board: number[][];
}

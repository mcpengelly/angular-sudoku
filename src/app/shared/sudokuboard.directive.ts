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
        <input id="special" type="text" />
        <input type="button" value="get text" (click)=getSquares() />
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
  constructor(public el: ElementRef, public renderer: Renderer) {}
  @Input() board: number[][];
  getSquares(): any {
    // think i may need to do something else here, elementRef?
    console.log(document.getElementById('special'));
    return 'test';
  }
}

// ngOnInit(){
//     // Use renderer to render the element with styles;
//     console.log(this.board);
//     console.log(typeof this.board);
//     if(this.board) {
//         console.log('sudoku board initialized');
//         // this.board = String.prototype.split.call(this.board, ',');
//     }
// }

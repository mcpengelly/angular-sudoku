// ./app/shared/shared.module.ts
import { NgModule } from '@angular/core';

import { SudokuBoardDirective } from './sudokuboard.directive';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		BrowserModule
	],
    declarations: [
        SudokuBoardDirective
    ],
    exports: [
        SudokuBoardDirective
    ]
})
export class SharedModule{}

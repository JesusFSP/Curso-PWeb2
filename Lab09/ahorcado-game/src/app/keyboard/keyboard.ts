import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.html',
  styleUrls: ['./keyboard.css']
})
export class KeyboardComponent {
  @Input() disabledLetters: string[] = [];
  @Input() gameOver: boolean = false;
  @Output() letterSelected = new EventEmitter<string>();
  
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  selectLetter(letter: string) {
    if (!this.gameOver && !this.disabledLetters.includes(letter)) {
      this.letterSelected.emit(letter);
    }
  }
}
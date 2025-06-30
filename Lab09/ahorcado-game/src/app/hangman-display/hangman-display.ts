// hangman-display.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hangman-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hangman-display.html',
  styleUrls: ['./hangman-display.css']
})
export class HangmanDisplayComponent {
  @Input() attemptsLeft: number = 6;
}
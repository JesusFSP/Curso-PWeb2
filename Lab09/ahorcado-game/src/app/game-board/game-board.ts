import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game';
import { HangmanDisplayComponent } from '../hangman-display/hangman-display';
import { KeyboardComponent } from '../keyboard/keyboard';
import { GameStatusComponent } from '../game-status/game-status';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CommonModule,
    HangmanDisplayComponent,
    KeyboardComponent,
    GameStatusComponent
  ],
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.css']
})
export class GameBoardComponent {
  constructor(public gameService: GameService) {}

  newGame() {
    this.gameService.newGame();
  }
}
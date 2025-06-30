// game-board.component.ts
import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.html',
  styleUrls: ['./game-board.css']
})
export class GameBoardComponent {
  constructor(public gameService: GameService) {}

  newGame() {
    this.gameService.newGame();
  }
}
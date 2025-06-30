// game-status.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-status.html',
  styleUrls: ['./game-status.css']
})
export class GameStatusComponent {
  @Input() isWon: boolean = false;
  @Input() isLost: boolean = false;
  @Input() word: string = '';
  @Output() newGame = new EventEmitter<void>();
}
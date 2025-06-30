// game.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private words: string[] = [
    'ANGULAR', 'TYPESCRIPT', 'JAVASCRIPT', 'DEVELOPER', 
    'PROGRAMMING', 'COMPUTER', 'ALGORITHM', 'FUNCTION'
  ];
  private selectedWord: string = '';
  private guessedLetters: string[] = [];
  private maxAttempts = 6;
  private attemptsLeft = this.maxAttempts;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.guessedLetters = [];
    this.attemptsLeft = this.maxAttempts;
  }

  guessLetter(letter: string): boolean {
    if (this.guessedLetters.includes(letter)) return false;
    
    this.guessedLetters.push(letter);
    
    if (!this.selectedWord.includes(letter)) {
      this.attemptsLeft--;
    }
    
    return true;
  }

  getWordDisplay(): string {
    return this.selectedWord
      .split('')
      .map(char => this.guessedLetters.includes(char) ? char : '_')
      .join(' ');
  }

  getGuessedLetters(): string[] {
    return [...this.guessedLetters];
  }

  getAttemptsLeft(): number {
    return this.attemptsLeft;
  }

  isGameWon(): boolean {
    return this.selectedWord
      .split('')
      .every(char => this.guessedLetters.includes(char));
  }

  isGameLost(): boolean {
    return this.attemptsLeft <= 0;
  }

  getSelectedWord(): string {
    return this.selectedWord;
  }
}
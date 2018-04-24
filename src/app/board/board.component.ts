import { Component, OnInit } from '@angular/core';

import { Piece } from '../data/Piece';
import { Player } from '../data/Player';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private gameService: GameService;

  private perspective: Player;
  private displayBoard: string[][];

  constructor(gameService: GameService) {
    this.gameService = gameService;

    this.perspective = Player.White;

    this.displayBoard = [];
    for (let i = 0; i < 8; i++) {
      this.displayBoard.push(['', '', '', '', '', '', '', '', '', '']);
    }
  }

  ngOnInit() : void {
    this.showBoard();
  }

  showBoard() : void {
    this.clearBoard();

    for (let piece of this.gameService.getBoard()) {
      const pos = this.getPosition(piece);
      this.displayBoard[pos[0]][pos[1]] = piece.getSymbol();
    }
  }

  clearBoard() : void {
    for (let row of this.displayBoard) {
      row.fill('');
    }
  }

  onClick(row: number, col: number) : void {
    throw new Error('TODO implement');
  }

  /**
   * Given a row and col coordinate, returns whether that square should be currently highlighted.
   *
   * @returns Boolean of whether the given board square should be highlighted.
   */
  isHighlighted(row: number, col: number) : boolean {
    // TODO IMPLEMENT
    if (row == 0 && col == 0) {
      return true;
    }
    return false;
  }

  /**
   * Given a row and col coordinate, return what color the board square should be.
   *
   * @returns String of color name for the square.
   */
  getSquareColor(row: number, col: number) : string {
    if (col == 0 || col == 9) {
      return (row % 2 == col % 2) ? "red" : "grey";
    } else {
      return (row % 2 == col % 2) ? "black" : "white";
    }
  }

  /**
   * Given a Piece object, returns where on the board it should be displayed, depending on perspective.
   *
   * @returns Tuple of [row, col] coordinate.
   */
  getPosition(piece: Piece) : [number, number] {
    const row = piece.rank - 1;  // Ranks are 1-based
    const col = 'XABCDEFGHY'.indexOf(piece.file);

    if (this.perspective == Player.White) {
      return [7 - row, col];
    } else {
      return [row, 9 - col];
    }
  }
}

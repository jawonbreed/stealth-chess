import { Component, OnInit } from '@angular/core';

import { Piece } from '../data/Piece';
import { Player } from '../data/Player';
import { Square } from '../data/Square';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private gameService: GameService;

  private perspective: Player;
  private highlighted: Square;
  private displayBoard: string[][];

  constructor(gameService: GameService) {
    this.gameService = gameService;

    this.perspective = Player.White;
    this.highlighted = undefined;

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
    if (this.isHighlighted(row, col)) {
      this.highlighted = undefined;
      return;
    }

    const square = this.getSquare(row, col);
    // TODO FIX
    this.highlighted = square;
  }

  /**
   * Given a row and col coordinate, returns whether that square should be currently highlighted.
   *
   * @returns Boolean of whether the given board square should be highlighted.
   */
  isHighlighted(row: number, col: number) : boolean {
    if (this.highlighted === undefined) {
      return false;
    }

    return this.highlighted.equals(this.getSquare(row, col));
  }

  /**
   * Given a row and col coordinate, return what color the board square should be.
   *
   * @returns String of color name for the square.
   */
  getColor(row: number, col: number) : string {
    if (col === 0 || col === 9) {
      return (row % 2 === col % 2) ? "red" : "grey";
    } else {
      return (row % 2 === col % 2) ? "black" : "white";
    }
  }

  /**
   * Given a Piece object, returns where on the board it should be displayed, depending on perspective.
   *
   * @returns Tuple of [row, col] coordinate for the current perspective.
   */
  getPosition(piece: Piece) : [number, number] {
    const square = piece.square;

    if (this.perspective === Player.White) {
      return [7 - square.rankIndex, square.fileIndex];
    } else {
      return [square.rankIndex, 9 - square.fileIndex];
    }
  }

  /**
   * Given a row and col coordinate, return the file and rank of the square.
   *
   * @returns Square object that corresponds to the given coordinate and the current perspective.
   */
  getSquare(row: number, col: number) : Square {
    if (this.perspective === Player.White) {
      return new Square(Square.FILES.charAt(col), 8 - row);
    } else {
      return new Square(Square.FILES.charAt(9 - col), row + 1);
    }
  }

  setPerspective(perspective: Player) : void {
    this.perspective = perspective;
  }

  setHighlighted(file: string, rank: number) : void {
    this.highlighted = new Square(file, rank);
  }

  clearHighlighted() : void {
    this.highlighted = undefined;
  }
}

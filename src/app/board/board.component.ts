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
      let pos = this.getPosition(piece);
      this.displayBoard[pos[0]][pos[1]] = piece.getSymbol();
    }
  }

  clearBoard() : void {
    for (let row of this.displayBoard) {
      row.fill('');
    }
  }

  getPosition(piece: Piece) : [number, number] {
    let row = piece.rank - 1;  // Ranks are 1-based
    let col = 'XABCDEFGHY'.indexOf(piece.file);

    if (this.perspective == Player.White) {
      return [7 - row, 9 - col];
    } else {
      return [row, col];
    }
  }
}

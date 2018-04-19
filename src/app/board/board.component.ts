import { Component, OnInit } from '@angular/core';

import { Piece } from '../data/Piece';
import { Player } from '../data/Player';

import { GameService } from '../services/game.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private gameService: GameService;
  private utilService: UtilService;

  private perspective: Player;
  private displayBoard: string[][];

  constructor(gameService: GameService, utilService: UtilService) {
    this.gameService = gameService;
    this.utilService = utilService;

    this.perspective = Player.White;
    this.displayBoard = [];
  }

  ngOnInit() : void {
    for (let row = 1; row <= 8; row++) {
      this.displayBoard.push([,,,,,,,,,]);
    }

    this.show();
  }

  show() : void {
    this.clear();

    for (let piece of this.gameService.getBoard()) {
      let pos = this.getPosition(piece);
      let row = this.displayBoard[pos[0]];
      row[pos[1]] = this.utilService.getSymbol(piece);
    }
  }

  clear() : void {
    for (let row of this.displayBoard) {
      row.fill('');
    }
  }

  getPosition(piece: Piece) : [number, number] {
    let row = piece.row - 1;  // Piece rows are 1-based
    let col = 'XABCDEFGHY'.indexOf(piece.col);

    if (this.perspective == Player.White) {
      return [row, col];
    } else {
      return [7 - row, 9 - col];
    }
  }
}

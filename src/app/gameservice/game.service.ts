import { Injectable } from '@angular/core';

import { Player } from '../data/Player';
import { PieceType } from '../data/PieceType';
import { Piece } from '../data/Piece';

@Injectable()
export class GameService {

  public currentPlayer: Player;
  public currentTurn: number;

  private board: Piece[];

  constructor() {
    this.newGame();
  }

  newGame() {
    this.currentPlayer = Player.White;
    this.currentTurn = 1;

    let board = [];

    board.push(new Piece(Player.White, PieceType.Rook, 'A', 1));
    board.push(new Piece(Player.White, PieceType.Knight, 'B', 1));
    board.push(new Piece(Player.White, PieceType.Bishop, 'C', 1));
    board.push(new Piece(Player.White, PieceType.Queen, 'D', 1));
    board.push(new Piece(Player.White, PieceType.King, 'E', 1));
    board.push(new Piece(Player.White, PieceType.Bishop, 'F', 1));
    board.push(new Piece(Player.White, PieceType.Knight, 'G', 1));
    board.push(new Piece(Player.White, PieceType.Rook, 'H', 1));

    board.push(new Piece(Player.White, PieceType.Assassin, 'X', 1));
    board.push(new Piece(Player.White, PieceType.Assassin, 'Y', 1));

    for (let col of 'ABCDEFGH') {
      board.push(new Piece(Player.White, PieceType.Pawn, col, 2));
    }

    board.push(new Piece(Player.Black, PieceType.Rook, 'A', 8));
    board.push(new Piece(Player.Black, PieceType.Knight, 'B', 8));
    board.push(new Piece(Player.Black, PieceType.Bishop, 'C', 8));
    board.push(new Piece(Player.Black, PieceType.Queen, 'D', 8));
    board.push(new Piece(Player.Black, PieceType.King, 'E', 8));
    board.push(new Piece(Player.Black, PieceType.Bishop, 'F', 8));
    board.push(new Piece(Player.Black, PieceType.Knight, 'G', 8));
    board.push(new Piece(Player.Black, PieceType.Rook, 'H', 8));

    board.push(new Piece(Player.Black, PieceType.Assassin, 'X', 8));
    board.push(new Piece(Player.Black, PieceType.Assassin, 'Y', 8));

    for (let col of 'ABCDEFGH') {
      board.push(new Piece(Player.Black, PieceType.Pawn, col, 7));
    }

    this.board = board;
  }

}

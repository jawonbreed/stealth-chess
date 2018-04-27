import { Injectable } from '@angular/core';

import { Piece } from '../data/Piece';
import { PieceType } from '../data/PieceType';
import { Player } from '../data/Player';
import { Square } from '../data/Square';

@Injectable()
export class RuleService {

  constructor() { }

  /**
   * @return Boolean of whether moving piece to the destination is a valid move, given the board.
   */
  validateMove(piece: Piece, board: Piece[], to: Square) : boolean {
    return false;
  }

  /**
   * @return Boolean of whether player is in check, given the board.
   */
  isInCheck(player: Player, board: Piece[]) : boolean {
    return false;
  }

  /**
   * @return Boolean of whether the piece on the board can legally move to the square.
   */
  private canMove(piece: Piece, board: Piece[], to: Square) : boolean {
    let result = false;

    switch (piece.pieceType) {
      case PieceType.King: {
        break;
      }
      case PieceType.Queen: {
        break;
      }
      case PieceType.Rook: {
        break;
      }
      case PieceType.Bishop: {
        break;
      }
      case PieceType.Knight: {
        break;
      }
      case PieceType.Pawn: {
        break;
      }
      case PieceType.Assassin: {
        break;
      }
      default: {
        return false;
      }
    }

    return result;
  }

  /**
   * @return Boolean of whether this is a legal castling move.
   */
  private canCastle(king: Piece, rook: Piece, board: Piece[], to: Square) : boolean {
    return false;
  }

}

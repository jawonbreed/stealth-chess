import { Injectable } from '@angular/core';

import { MoveResult } from '../data/MoveResult';
import { Piece } from '../data/Piece';
import { PieceType } from '../data/PieceType';
import { Player } from '../data/Player';
import { Square } from '../data/Square';

@Injectable()
export class RuleService {

  constructor() { }

  /**
   * @return MoveResult that contains whether moving piece to the destination is a successful
   * move, given the board. If the move is not valid, the result will contain reasons why.
   */
  // TODO: check is a difficult verb to use for this particular project.
  checkMove(piece: Piece, board: Piece[], to: Square) : MoveResult {
    return undefined;
  }

  /**
   * @return Boolean of whether player is in check, given the board.
   */
  isInCheck(player: Player, board: Piece[]) : boolean {
    return false;
  }

  /**
   * @return MoveResult of whether the piece on the board can legally move to the square.
   */
  canMove(piece: Piece, board: Piece[], to: Square) : MoveResult {
    let success = false;
    let reasons = [];

    const dist = piece.square.distance(to);
    if (dist[0] === 0 && dist[1] === 0) {
      reasons.push('Must move to a different square.');
      return new MoveResult(false, reasons);
    }

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
        return new MoveResult(false, ["Unknown piece: " + piece.pieceType]);
      }
    }

    return new MoveResult(success, reasons);
  }

  /**
   * @return Boolean of whether this is a legal castling move.
   */
  canCastle(king: Piece, rook: Piece, board: Piece[], to: Square) : boolean {
    return false;
  }

}

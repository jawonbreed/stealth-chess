import { PieceType } from './PieceType';
import { Player } from './Player';

export class Piece {

  readonly owner: Player;
  readonly pieceType: PieceType;

  public file: string;  /* A-H, X, Y */
  public rank: number;  /* 1-8 */
  public slurk: number;

  constructor(owner: Player, pieceType: PieceType, file: string, rank: number) {
    this.owner = owner;
    this.pieceType = pieceType;
    this.file = file;
    this.rank = rank;
    this.slurk = 0;
  }

  toString() : string {
    let s = this.owner + ' ' + this.pieceType + ' ' + this.file + this.rank;
    if (this.pieceType == PieceType.Assassin) {
      s += ' ' + this.slurk;
    }
    return s;
  }

  getSymbol() : string {
    switch (this.owner) {
      case Player.White: {
        switch (this.pieceType) {
          case PieceType.King:     return '\u2654'
          case PieceType.Queen:    return '\u2655'
          case PieceType.Rook:     return '\u2656'
          case PieceType.Bishop:   return '\u2657'
          case PieceType.Knight:   return '\u2658'
          case PieceType.Pawn:     return '\u2659'
          case PieceType.Assassin: return '\u2E38'
          default: return '';
        }
      }
      case Player.Black: {
        switch (this.pieceType) {
          case PieceType.King:     return '\u265A'
          case PieceType.Queen:    return '\u265B'
          case PieceType.Rook:     return '\u265C'
          case PieceType.Bishop:   return '\u265D'
          case PieceType.Knight:   return '\u265E'
          case PieceType.Pawn:     return '\u265F'
          case PieceType.Assassin: return '\u2020'
          default: return '';
        }
      }
      default: {
        // TODO write to error log
        return '';
      }
    }
  }
}

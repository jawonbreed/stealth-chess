import { PieceType } from './PieceType';
import { Player } from './Player';
import { Square } from './Square';

/**
 * Represents a chess piece on the board.
 */
export class Piece {

  readonly owner: Player;
  readonly pieceType: PieceType;

  public square: Square;
  public slurk: number;

  constructor(owner: Player, pieceType: PieceType, file?: string, rank?: number, square?: Square) {
    this.owner = owner;
    this.pieceType = pieceType;
    this.square = (square != undefined) ? square : new Square(file, rank);
    this.slurk = 0;
  }

  toString() : string {
    let owner = Player[this.owner];
    let pieceType = PieceType[this.pieceType];
    let s = `${owner} ${pieceType} ${this.square}`;
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

import { Player } from './Player';
import { PieceType } from './PieceType';

export class Piece {
  readonly owner: Player;
  readonly pieceType: PieceType;
  public col: string;  /* A-H, X, Y */
  public row: number;  /* 1-8 */
  public slurk: number;

  constructor(owner: Player, pieceType: PieceType, col: string, row: number) {
    this.owner = owner;
    this.pieceType = pieceType;
    this.col = col;
    this.row = row;
    this.slurk = 0;
  }

  toString() {
    let s: this.owner + ' ' + this.pieceType + ' ' + this.col + this.row;
    if (this.pieceType = PieceType.Assassin) {
      s += ' ' + slurk;
    }
    return s;
  }
}

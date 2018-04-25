export class Square {
  static FILES = 'XABCDEFGHY';

  readonly file: string;  /* X, A-H, Y */
  readonly rank: number;  /* 1-8 */
  readonly fileIndex: number;  /* 0-9 */
  readonly rankIndex: number;  /* 0-7 */

  constructor(file: string, rank: number) {
    file = file.toUpperCase();

    if (file.length !== 1 || Square.FILES.indexOf(file) === -1) {
      throw new RangeError(`Bad file '${file}'`);
    }
    if (rank < 1 || 8 < rank) {
      throw new RangeError(`Bad rank '${rank}'`);
    }

    this.file = file;
    this.rank = rank;
    this.fileIndex = Square.FILES.indexOf(file);
    this.rankIndex = rank - 1;
  }

  equals(sq: Square) : boolean {
    return this.file === sq.file && this.rank === sq.rank;
  }

  toString() : string {
    return `${this.file} ${this.rank}`;
  }
}

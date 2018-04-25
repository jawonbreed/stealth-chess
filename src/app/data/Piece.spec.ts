import { TestBed, inject } from '@angular/core/testing';

import { Piece } from './Piece';
import { PieceType } from './PieceType';
import { Player } from './Player';

describe('Piece', () => {

  it('should return the correct symbol on getSymbol()', () => {
    let piece = new Piece(Player.White, PieceType.King, 'A', 1);
    expect(piece.getSymbol()).toBe('♔');

    piece = new Piece(Player.Black, PieceType.Assassin, 'A', 1);
    expect(piece.getSymbol()).toBe('†');
  });

  it('should return the correct toString()', () => {
    let piece = new Piece(Player.White, PieceType.King, 'A', 1);
    expect(piece.toString()).toBe('White King A 1');
  });

});

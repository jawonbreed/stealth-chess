import { TestBed, inject } from '@angular/core/testing';

import { Player } from './Player';
import { PieceType } from './PieceType';
import { Piece } from './Piece';

describe('Piece', () => {

  it('should return the correct symbol on getSymbol()', () => {
    let piece = new Piece(Player.White, PieceType.King, 'A', 1);
    expect(piece.getSymbol()).toBe('♔');

    piece = new Piece(Player.Black, PieceType.Assassin, 'A', 1);
    expect(piece.getSymbol()).toBe('†');
  });
});


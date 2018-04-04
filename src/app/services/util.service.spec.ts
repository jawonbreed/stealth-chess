import { TestBed, inject } from '@angular/core/testing';

import { Player } from '../data/Player';
import { PieceType } from '../data/PieceType';
import { Piece } from '../data/Piece';

import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilService]
    });
  });

  it('should be created', inject([UtilService], (service: UtilService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the correct string for a piece', inject([UtilService], (service: UtilService) => {
    let piece = new Piece(Player.White, PieceType.King, 'A', 1);
    expect(service.getSymbol(piece)).toBe('♔');
  }));
});

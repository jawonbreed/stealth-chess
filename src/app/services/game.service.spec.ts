import { TestBed, inject } from '@angular/core/testing';

import { Piece } from '../data/Piece';
import { PieceType } from '../data/PieceType';
import { Player } from '../data/Player';
import { Square } from '../data/Square';

import { GameService } from './game.service';
import { RuleService } from './rule.service';

describe('GameService', () => {
  let ruleSpy = jasmine.createSpy('RuleService');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameService,
        { provide: RuleService, useValue: ruleSpy }
      ]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should initialize a new gameboard', inject([GameService], (service: GameService) => {
    expect(service.getBoard().length).toBe(36);

    let numWhite = 0;
    let numBlack = 0;
    for (let piece of service.getBoard()) {
      if (piece.owner == Player.White) {
        numWhite++;
      } else if (piece.owner == Player.Black) {
        numBlack++;
      } else {
        fail('piece with no owner: ' + piece.toString());
      }
    }

    expect(numWhite).toBe(18);
    expect(numBlack).toBe(18);
  }));

  it('should return the correct piece or undefined on getPieceAt()',
      inject([GameService], (service: GameService) => {
    expect(service.getPieceAt(new Square('E', 1)))
      .toEqual(new Piece(Player.White, PieceType.King, 'E', 1));
    expect(service.getPieceAt(new Square('E', 8)))
      .toEqual(new Piece(Player.Black, PieceType.King, 'E', 8));
    expect(service.getPieceAt(new Square('A', 4)))
      .toBeUndefined();
  }));

});

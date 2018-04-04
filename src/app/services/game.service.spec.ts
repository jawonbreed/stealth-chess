import { TestBed, inject } from '@angular/core/testing';

import { Player } from '../data/Player';

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
  }))
});

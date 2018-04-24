import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

import { Player } from '../data/Player';

import { GameService } from '../services/game.service';
import { RuleService } from '../services/rule.service';
import { UtilService } from '../services/util.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ],
      providers: [
        GameService,
        RuleService,
        UtilService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with 80 board squares', () => {
    const topDiv = fixture.nativeElement.childNodes[0];
    expect(topDiv.getElementsByClassName('red').length).toBe(8);
    expect(topDiv.getElementsByClassName('grey').length).toBe(8);
    expect(topDiv.getElementsByClassName('black').length).toBe(32);
    expect(topDiv.getElementsByClassName('white').length).toBe(32);
  });

  it('should set up chessboard', () => {
    expect(document.getElementById('00').textContent).toBe('†');
    expect(document.getElementById('79').textContent).toBe('⸸');
  });

  it('should return the correct value for isHighlighted()', () => {
    component.clearHighlighted();
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(false);
      }
    }

    component.setHighlighted('E', 1);

    component.setPerspective(Player.White);
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(row === 7 && col === 5);
      }
    }

    component.setPerspective(Player.Black);
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(row === 0 && col === 4);
      }
    }

  });

  it('should return the correct file and rank on getFileRank()', () => {
    component.setPerspective(Player.White);
    expect(component.getFileRank(0, 0)).toEqual(['X', 8]);
    expect(component.getFileRank(7, 0)).toEqual(['X', 1]);
    expect(component.getFileRank(0, 9)).toEqual(['Y', 8]);
    expect(component.getFileRank(7, 9)).toEqual(['Y', 1]);
    expect(component.getFileRank(6, 4)).toEqual(['D', 2]);

    component.setPerspective(Player.Black);
    expect(component.getFileRank(0, 0)).toEqual(['Y', 1]);
    expect(component.getFileRank(7, 0)).toEqual(['Y', 8]);
    expect(component.getFileRank(0, 9)).toEqual(['X', 1]);
    expect(component.getFileRank(7, 9)).toEqual(['X', 8]);
    expect(component.getFileRank(6, 4)).toEqual(['E', 7]);
  });

});

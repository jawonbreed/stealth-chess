import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

import { Player } from '../data/Player';
import { Square } from '../data/Square';

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

  it('should initialize with correctly colored squares', () => {
    const topDiv = fixture.nativeElement.childNodes[0];
    expect(topDiv.getElementsByClassName('red').length).toBe(8);
    expect(topDiv.getElementsByClassName('grey').length).toBe(8);
    expect(topDiv.getElementsByClassName('black').length).toBe(32);
    expect(topDiv.getElementsByClassName('white').length).toBe(32);
  });

  it('should set up the pieces on the board', () => {
    expect(document.getElementById('00').textContent).toBe('†');
    expect(document.getElementById('01').textContent).toBe('♜');
    expect(document.getElementById('02').textContent).toBe('♞');
    expect(document.getElementById('03').textContent).toBe('♝');
    expect(document.getElementById('04').textContent).toBe('♛');
    expect(document.getElementById('05').textContent).toBe('♚');
    expect(document.getElementById('06').textContent).toBe('♝');
    expect(document.getElementById('07').textContent).toBe('♞');
    expect(document.getElementById('08').textContent).toBe('♜');
    expect(document.getElementById('09').textContent).toBe('†');
    for (let i = 11; i < 19; i++) {
      expect(document.getElementById('' + i).textContent).toBe('♟');
    }

    expect(document.getElementById('70').textContent).toBe('⸸');
    expect(document.getElementById('71').textContent).toBe('♖');
    expect(document.getElementById('72').textContent).toBe('♘');
    expect(document.getElementById('73').textContent).toBe('♗');
    expect(document.getElementById('74').textContent).toBe('♕');
    expect(document.getElementById('75').textContent).toBe('♔');
    expect(document.getElementById('76').textContent).toBe('♗');
    expect(document.getElementById('77').textContent).toBe('♘');
    expect(document.getElementById('78').textContent).toBe('♖');
    expect(document.getElementById('79').textContent).toBe('⸸');
    for (let i = 61; i < 69; i++) {
      expect(document.getElementById('' + i).textContent).toBe('♙');
    }
  });

  it('should highlight the correct square on onClick()', () => {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(false);
      }
    }

    component.onClick(2, 4);
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(row === 2 && col === 4);
      }
    }

    component.onClick(2, 4);
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 10; col++) {
        expect(component.isHighlighted(row, col)).toBe(false);
      }
    }
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

  it('should return the correct Square on getSquare()', () => {
    component.setPerspective(Player.White);
    expect(component.getSquare(0, 0)).toEqual(new Square('X', 8));
    expect(component.getSquare(7, 0)).toEqual(new Square('X', 1));
    expect(component.getSquare(0, 9)).toEqual(new Square('Y', 8));
    expect(component.getSquare(7, 9)).toEqual(new Square('Y', 1));
    expect(component.getSquare(6, 4)).toEqual(new Square('D', 2));

    component.setPerspective(Player.Black);
    expect(component.getSquare(0, 0)).toEqual(new Square('Y', 1));
    expect(component.getSquare(7, 0)).toEqual(new Square('Y', 8));
    expect(component.getSquare(0, 9)).toEqual(new Square('X', 1));
    expect(component.getSquare(7, 9)).toEqual(new Square('X', 8));
    expect(component.getSquare(6, 4)).toEqual(new Square('E', 7));
  });

});

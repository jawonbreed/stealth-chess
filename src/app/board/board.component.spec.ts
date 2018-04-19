import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';

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
    expect(topDiv.querySelectorAll('div').length).toBe(80);
  });

  it('should set up chessboard', () => {
    const topDiv = fixture.nativeElement.childNodes[0];
    const squares = topDiv.querySelectorAll('div');
    expect(squares[0].textContent).toBe('†');
    expect(squares[79].textContent).toBe('⸸');
  });

});

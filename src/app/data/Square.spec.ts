import { TestBed, inject } from '@angular/core/testing';

import { Square } from './Square';

describe('Square', () => {

  it('should create', () => {
    for (let f of 'XABCDEFGHY') {
      for (let r = 1; r < 9; r++) {
        expect(new Square(f, r)).toBeDefined();
      }
    }
  });

  it('should create in lowercase', () => {
    for (let f of 'xabcdefghy') {
      for (let r = 1; r < 9; r++) {
        expect(new Square(f, r)).toBeDefined();
      }
    }
  });

  it('should throw on bad input', () => {
    expect(function() { new Square('_', 1); }).toThrowError(RangeError, 'Bad file \'_\'');
    expect(function() { new Square('X', 0); }).toThrowError(RangeError, 'Bad rank \'0\'');
    expect(function() { new Square('X', 9); }).toThrowError(RangeError, 'Bad rank \'9\'');
  });

  it('should return the correct toString()', () => {
    let sq = new Square('a', 1);
    expect(sq.toString()).toEqual('A 1');
  });

});


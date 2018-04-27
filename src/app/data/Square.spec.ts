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

  it('should return the correct equals()', () => {
    let sq1 = new Square('a', 1);
    let sq2 = new Square('a', 1);
    let sq3 = new Square('b', 1);
    let sq4 = new Square('a', 2);
    let sq5 = new Square('b', 2);

    expect(sq1.equals(sq2)).toBe(true);
    expect(sq2.equals(sq1)).toBe(true);
    expect(sq1.equals(sq3)).toBe(false);
    expect(sq1.equals(sq4)).toBe(false);
    expect(sq1.equals(sq5)).toBe(false);
  });

  it('should return the correct distance()', () => {
    let sq1 = new Square('a', 1);
    let sq2 = new Square('a', 1);
    let sq3 = new Square('b', 1);
    let sq4 = new Square('a', 2);
    let sq5 = new Square('e', 7);

    expect(sq1.distance(sq2)).toEqual([0, 0]);
    expect(sq2.distance(sq1)).toEqual([0, 0]);

    expect(sq1.distance(sq3)).toEqual([1, 0]);
    expect(sq3.distance(sq1)).toEqual([1, 0]);

    expect(sq1.distance(sq4)).toEqual([0, 1]);
    expect(sq4.distance(sq1)).toEqual([0, 1]);

    expect(sq1.distance(sq5)).toEqual([4, 6]);
    expect(sq5.distance(sq1)).toEqual([4, 6]);
  });

  it('should return the correct toString()', () => {
    let sq = new Square('a', 1);
    expect(sq.toString()).toEqual('A 1');
  });

});


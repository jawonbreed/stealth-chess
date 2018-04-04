import { Injectable } from '@angular/core';

import { Player } from '../data/Player';
import { PieceType } from '../data/PieceType';
import { Piece } from '../data/Piece';

@Injectable()
export class UtilService {

  constructor() { }

  getSymbol(piece: Piece) {
    switch (piece.owner) {
      case Player.White: {
        switch (piece.pieceType) {
          case PieceType.King:     return '\u2654'
          case PieceType.Queen:    return '\u2655'
          case PieceType.Rook:     return '\u2656'
          case PieceType.Bishop:   return '\u2657'
          case PieceType.Knight:   return '\u2658'
          case PieceType.Pawn:     return '\u2659'
          case PieceType.Assassin: return '_'
          default: return '';
        }
      }
      case Player.Black: {
        switch (piece.pieceType) {
          case PieceType.King:     return '\u265A'
          case PieceType.Queen:    return '\u265B'
          case PieceType.Rook:     return '\u265C'
          case PieceType.Bishop:   return '\u265D'
          case PieceType.Knight:   return '\u265E'
          case PieceType.Pawn:     return '\u265F'
          case PieceType.Assassin: return '_'
          default: return '';
        }
      }
      default: {
        // TODO write to error log
        return '';
      }
    }
  }
}

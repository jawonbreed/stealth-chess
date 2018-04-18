import { Component, OnInit } from '@angular/core';

import { Piece } from '../data/Piece';
import { Player } from '../data/Player';

import { GameService } from '../services/game.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private gameService: GameService;
  private utilService: UtilService;

  private perspective: Player;
  private displayBoard: string[][];

  constructor(gameService: GameService, utilService: UtilService) {
    this.gameService = gameService;
    this.utilService = utilService;

    this.perspective = Player.White;
    this.displayBoard = [];
  }

  ngOnInit() {
    let board = [];
    for (let i = 0; i < 8; i++) {
      let a = ['', '', '', '', '', '', '', '', '', ''];
      board.push(a);
    }
    this.displayBoard = board;
  }
}

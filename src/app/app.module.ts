import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './services/game.service';
import { RuleService } from './services/rule.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService,
    RuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

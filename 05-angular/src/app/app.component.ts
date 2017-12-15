import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';

  // default state
  fields = Array(9).fill(false); // start with array of 9 with false filled in
  player1 = "x";
  player2 = "o";
  currentPlayer = 1;

  handlePlay(index) {
    // clone fields so ng knows when update occurs
    var fields = this.fields.slice();
    var piece = this['player' + this.currentPlayer]; //x or o

    fields[index] = piece;

    // fill in the current piece, and switch player
    this.fields = fields;
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // toggle between player  1 and 2
  }

  handleRestart() {
    this.fields = Array(9).fill(false); // start with array of 9 with false filled in
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-game',
  templateUrl: './rock-game.component.html',
  styleUrls: ['./rock-game.component.scss']
})
export class RockGameComponent implements OnInit {

  signs: string[] = ['rock', 'paper', 'scissors'];
  playerSign = 'rock';
  computerSign = 'paper';

  counter = 0;
  resultMatch: string;

  displayGame = true;
  popUp = false;

  constructor() { }

  ngOnInit(): void {
  }

  chooseSign(sign: string) {
    this.playerSign = sign;
    this.computerSign = this.signs[this.getRandomSign()];
    console.log(this.playerSign);
    console.log(this.computerSign);

    this.determineWinner();
    this.displayGame = false;
  }

  determineWinner() {
    const a = this.playerSign;
    const b = this.computerSign;

    if ((a === 'rock' && b === 'rock') || (a === 'paper' && b === 'paper') || (a === 'scissors' && b === 'scissors') ) {
     this.resultMatch = 'equality';
    } else if ((a === 'rock' && b === 'scissors') || (a === 'scissors' && b === 'paper') || (a === 'paper' && b === 'rock') ) {
      this.resultMatch = 'win';
      this.counter += 1;
    } else {
      this.resultMatch = 'loose';
    }

    console.log(this.resultMatch);
  }

  getRandomSign(): number {
    return Math.floor(Math.random() * Math.floor(3));
  }

  restart() {
    this.displayGame = true;
  }

  rules() {
    this.popUp = true;
  }

  closeRules() {
    this.popUp = false;
  }

}

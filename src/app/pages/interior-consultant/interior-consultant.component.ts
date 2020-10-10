import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interior-consultant',
  templateUrl: './interior-consultant.component.html',
  styleUrls: ['./interior-consultant.component.scss']
})
export class InteriorConsultantComponent implements OnInit {

  burger = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayBurger() {
    this.burger = !this.burger;
    if (screen.width > 800) {
      this.burger = false;
    }
  }

}

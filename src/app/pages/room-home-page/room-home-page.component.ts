import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-home-page',
  templateUrl: './room-home-page.component.html',
  styleUrls: ['./room-home-page.component.scss']
})
export class RoomHomePageComponent implements OnInit {

  current = 0;
  slides;
  slidesCount;
  maxLeft;

  constructor() { }

  ngOnInit(): void {
    this.slides = document.querySelector('.container__top__right__slides');
    this.slidesCount = this.slides.childElementCount;
    this.maxLeft = (this.slidesCount - 1) * 100 * -1;
  }

  next() {
    this.changeSlide();
    console.log(1);

  }

  prev() {
    this.changeSlide(false);
  }

  changeSlide(next = true) {

    if (next) {
      this.current += this.current > this.maxLeft ? -100 : this.current * -1;
    } else {
      this.current = this.current < 0 ? this.current + 100 : this.maxLeft;
    }

    this.slides.style.left = this.current + '%';

  }

}

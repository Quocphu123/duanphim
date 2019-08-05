import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mang = [
    { img: "/assets/images/slider1.jpg" },
    { img: "/assets/images/slider2.jpg" },
    { img: "/assets/images/slider3.jpg" },
    { img: "/assets/images/slider4.jpg" },

  ];
 
 

}

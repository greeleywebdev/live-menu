import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  imgSrc: String;

  constructor() { }

  ngOnInit() {
    this.imgSrc = 'https://images.squarespace-cdn.com/content/v1/58b449258419c27c67294376/298b8bc4-0003-446e-92de-3ed03ef79c0b/Red+Stripes+Logo_Northern+Row-01.png?format=1500w';
  }

}

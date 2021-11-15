import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  imgSrc: string;

  constructor(public data: DataService) { }

  ngOnInit() {
    this.data.getFullMenu(this.data.merchantId).subscribe(data => {
      this.imgSrc = data.logo;
    });
  }

}

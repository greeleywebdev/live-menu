import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private data: DataService, public router: Router) { }

  ngOnInit() {
    this.data.hideMenuHeader = true;
  }

  login() {
    if (this.username === 'rhinegeist') {
      this.data.merchantId = '621e4d25b83cd3c65f0f99ea';
    } else {
      this.data.merchantId = '6189917c5cb1dd7c4aac10ed';
    }

    this.router.navigate(['/home']);
  }

  usernameChanged(value): void {
    this.username = value;
  }

  passwordChanged(value): void {
    this.password = value;
  }

}

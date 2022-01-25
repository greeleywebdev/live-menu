import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private data: DataService, public router: Router) { }

  ngOnInit() {
    this.data.hideMenuHeader = true;
  }

  login() {
    this.router.navigate(['/home']);
  }

}

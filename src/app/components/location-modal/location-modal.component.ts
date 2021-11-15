import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
  listOfLocations = [];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.listOfLocations = [
      {name: 'W McMicken Ave, Cincinnati'},
      {name: 'Mobile Van 1'},
      {name: 'Mobile Van 2'},
      {name: 'Convention Pop Up'}
    ];
  }

  dismissModal() {
      this.modalController.dismiss();
  }

}

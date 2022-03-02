import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoadingController } from '@ionic/angular';
import { ENDPOINTS } from '../models/Endpoints';

import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
const { Http } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  menu: any;
  merchantLogo: string;
  merchantId = "6189917c5cb1dd7c4aac10ed";
  showLoader = false;
  hideMenuHeader = false;

  httpHeader = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private loadingController: LoadingController) { }

  async presentLoader() {
    this.showLoader = true;
    const loading = await this.loadingController.create({
      mode: 'ios',
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.showLoader = false;
  }

  async dismissLoader() {
    await this.loadingController.dismiss();
  }

  public getFullMenu(merchantId: string): any {
    return Http.get({
      url: ENDPOINTS.getFullMenu + merchantId,
    })
  }

  public saveChanges(merchantId, changedMenu): any {
    return Http.request({
      method: 'PUT',
      url: ENDPOINTS.updateMerchantMenu + merchantId,
      headers: { 'Content-Type': 'application/json' },
      data: changedMenu
    })
  }

  public getMerchantBranding(): any {
    return Http.request({
      method: 'GET',
      url: 'assets/files/brandingExample.json'
    })
  }

}

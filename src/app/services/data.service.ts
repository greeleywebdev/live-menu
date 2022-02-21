import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoadingController } from '@ionic/angular';
import { ENDPOINTS } from '../models/Endpoints';

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

  constructor(private httpClient: HttpClient, private loadingController: LoadingController) { }

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
    return this.httpClient.get(ENDPOINTS.getFullMenu + merchantId, this.httpHeader);
  }

  public saveChanges(merchantId, changedMenu): any {
    return this.httpClient.put(ENDPOINTS.updateMerchantMenu + merchantId, changedMenu).subscribe({
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

}

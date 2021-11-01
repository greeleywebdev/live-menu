import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  menu: any;
  showMenuUpdateButton: boolean;
  showLoader = false;

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

  public getFullMenu(): any {
    return this.httpClient.get('assets/files/NorthernRowMenu.json');
  }

  saveChanges(changes): void {
      // TODO: POST call to service.
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 50);
  }

}

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { LocationModalComponent } from '../components/location-modal/location-modal.component';
import { Category, Menu } from '../models/menu';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any[];
  shownMenu: any;
  editableMenu: any;
  activeLocation: string;
  defaultSegment: string;
  activeSegment: string;
  searchValue: string;
  hideSections = false;
  listOfChanges = [];

  constructor(private data: DataService, private titleService: Title, public modalController: ModalController) { }

  ngOnInit(): void {
    this.getMenu();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMenu(): Menu[] {
    this.editableMenu = undefined;
    return this.data.getFullMenu(this.data.merchantId).subscribe(data => {
      this.titleService.setTitle('LiveMenu | ' + data.name);
      this.data.merchantLogo = data.logo;
      this.editableMenu = data;
      delete this.editableMenu._id;
      this.menu = data.menu.categories;
      // These 3 cause the reload issue on other tabs
      this.defaultSegment = this.menu[1].name;
      this.activeSegment = this.defaultSegment;
      this.shownMenu = this.menu[1].sections;
      // ........................................
      const address = data.address
      this.activeLocation = address.street_name + ", " + address.city;
    });
  }

  segmentChanged(ev: any): void {
    this.clearSearchValue();
    this.activeSegment = ev.detail.value;
    for (var i in this.menu) {
      if (this.activeSegment === this.menu[i].name) {
        this.shownMenu = this.menu[i].sections;
      }
    }
  }

  search(ev: any): void {
    const searchValue = ev.target.value.toLowerCase();

    const items = []

    for (let i in this.shownMenu) {
      this.shownMenu[i].items.forEach(element => {
        items.push(element);
      });
    }

    items.forEach((item) => {
      item.hidden = false;
      const shouldShow = (item.name.toLowerCase().includes(searchValue));
      if (!shouldShow) {
        item.hidden = true;
      } else {
        item.hidden = false;
      }
    });
  }


  itemToggle(ev: any, item): void {
    this.clearSearchValue();
    const checkedValue = ev.detail.checked;
    const menuItem = item;
    this.editableMenu.menu.categories.forEach(category => {
      if (this.activeSegment === category.name) {
        for (const section of category.sections) {
          for (const item of section.items) {
            if (item.name.toLowerCase() === menuItem.toLowerCase()) {
              item.is_active = checkedValue;
            }
          }
        }
      }
    });
    this.data.saveChanges(this.data.merchantId, this.editableMenu);
    setTimeout(() => {
      this.editableMenu = undefined;
      return this.data.getFullMenu(this.data.merchantId).subscribe(data => {
        this.titleService.setTitle('LiveMenu | ' + data.name);
        this.editableMenu = data;
        delete this.editableMenu._id;
        this.menu = data.menu.categories;
        for (var i in this.menu) {
          if (this.activeSegment === this.menu[i].name) {
            this.shownMenu = this.menu[i].sections;
          }
        }
      });
    }, 100);
  }

  async presentLocationModal() {
    const modal = await this.modalController.create({
      component: LocationModalComponent,
      cssClass: 'custom-modal-class'
    });
    return modal.present();
  }

  clearSearchValue(): void {
    const ev = {
      target: {
        value: ''
      }
    };
    this.searchValue = ev.target.value;
    this.search(ev);
  }


}

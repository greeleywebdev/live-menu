import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocationModalComponent } from '../components/location-modal/location-modal.component';
import { Menu } from '../models/Menu';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu: any[];
  shownMenu: any;
  activeLocation: string;
  defaultSegment: string;
  activeSegment: string;
  searchValue: string;
  hideSections = false;
  listOfChanges = [];

  constructor(private data: DataService, public modalController: ModalController) { }

  ngOnInit(): void {
    this.getMenu();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMenu(): Menu[] {
    return this.data.getFullMenu().subscribe(data => {
      this.menu = data.categories;
      this.defaultSegment = this.menu[1].name;
      this.activeSegment = this.defaultSegment;
      this.shownMenu = this.menu[1].sections;
      this.activeLocation = data.location;
    });
  }

  segmentChanged(ev: any): void {
    this.activeSegment = ev.detail.value;
    for (var i in this.menu) {
      if (this.activeSegment === this.menu[i].name) {
        this.shownMenu = this.menu[i].sections
      }
    }
    this.hideSaveComponent();
  }

  search(ev: any): void {
      const searchValue = ev.target.value.toLowerCase();

      const items = []

      for (let i in this.shownMenu) {
        this.shownMenu[i].list.forEach(element => {
          items.push(element);
        });
      }

      items.forEach((item) => {
        const shouldShow = (item.header.toLowerCase().includes(searchValue));
        if (!shouldShow) {
          item.hidden = true;
        } else {
          item.hidden = false;
        }
      });
    }


  itemToggle(ev: any, item): void {
    const checkedValue = ev.detail.checked;
    const menuItem = item;
    const changedItem = {
      name: menuItem,
      value: checkedValue
    }
    this.listOfChanges.push(changedItem);
    this.data.showMenuUpdateButton = true;
  }

  async presentLocationModal() {
    const modal = await this.modalController.create({
      component: LocationModalComponent,
      cssClass: 'custom-modal-class'
    });
    return modal.present();
  }

  saveChanges(): void {
    this.hideSaveComponent();
    this.data.presentLoader();
    this.clearSearchValue();
    this.data.saveChanges(this.listOfChanges);
    this.getMenu();
    this.listOfChanges = [];
  }

  cancelChanges(): void {
    this.hideSaveComponent();
    this.clearSearchValue();
    this.getMenu();
  }

  clearSearchValue(): void {
    this.searchValue = '';
  }

  showSaveComponent(): void {
    this.data.showMenuUpdateButton = true;
  }

  hideSaveComponent(): void {
    this.data.showMenuUpdateButton = false;
  }


}

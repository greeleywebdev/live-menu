import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() menu: any;
  listOfChanges = [];
  changesForm: FormGroup;

  constructor(private data: DataService) { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
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
}

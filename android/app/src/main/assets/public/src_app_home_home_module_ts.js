(self["webpackChunklive_menu"] = self["webpackChunklive_menu"] || []).push([["src_app_home_home_module_ts"],{

/***/ 8777:
/*!***********************************************************************!*\
  !*** ./src/app/components/location-modal/location-modal.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationModalComponent": () => (/* binding */ LocationModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_location_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./location-modal.component.html */ 9597);
/* harmony import */ var _location_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-modal.component.scss */ 5976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let LocationModalComponent = class LocationModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.listOfLocations = [];
    }
    ngOnInit() {
        this.listOfLocations = [
            { name: 'W McMicken Ave, Cincinnati' },
            { name: 'Mobile Van 1' },
            { name: 'Mobile Van 2' },
            { name: 'Convention Pop Up' }
        ];
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
LocationModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
LocationModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-location-modal',
        template: _raw_loader_location_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_location_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LocationModalComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item/menu-item.module */ 9736);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _menu_item_menu_item_module__WEBPACK_IMPORTED_MODULE_2__.MenuItemComponentModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _components_location_modal_location_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/location-modal/location-modal.component */ 8777);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _capacitor_community_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor-community/http */ 3975);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _models_Endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Endpoints */ 5479);











const { Http } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Plugins;
let HomePage = class HomePage {
    constructor(data, titleService, modalController) {
        this.data = data;
        this.titleService = titleService;
        this.modalController = modalController;
        this.hideSections = false;
        this.listOfChanges = [];
    }
    ngOnInit() {
        this.getMenu();
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    // getMenu(): Menu[] {
    //   this.editableMenu = undefined;
    //   return this.data.getFullMenu('6189917c5cb1dd7c4aac10ed').subscribe(data => {
    //     this.titleService.setTitle('LiveMenu | ' + data.name);
    //     this.data.merchantLogo = data.logo;
    //     this.editableMenu = data;
    //     delete this.editableMenu._id;
    //     this.menu = data.menu.categories;
    //     // These 3 cause the reload issue on other tabs
    //     this.defaultSegment = this.menu[1].name;
    //     this.activeSegment = this.defaultSegment;
    //     this.shownMenu = this.menu[1].sections;
    //     // ........................................
    //     const address = data.address
    //     this.activeLocation = address.street_name + ", " + address.city;
    //   });
    // }
    getMenu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            return Http.get({
                url: _models_Endpoints__WEBPACK_IMPORTED_MODULE_6__.ENDPOINTS.getFullMenu + this.data.merchantId,
            })
                .then(({ data }) => {
                this.titleService.setTitle('LiveMenu | ' + data.name);
                this.data.merchantLogo = data.logo;
                this.editableMenu = data;
                delete this.editableMenu._id;
                this.menu = data.menu.categories;
                this.defaultSegment = this.menu[1].name;
                this.activeSegment = this.defaultSegment;
                this.shownMenu = this.menu[1].sections;
                const address = data.address;
                this.activeLocation = address.street_name + ", " + address.city;
            });
        });
    }
    segmentChanged(ev) {
        this.clearSearchValue();
        this.activeSegment = ev.detail.value;
        for (var i in this.menu) {
            if (this.activeSegment === this.menu[i].name) {
                this.shownMenu = this.menu[i].sections;
            }
        }
    }
    search(ev) {
        const searchValue = ev.target.value.toLowerCase();
        const items = [];
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
            }
            else {
                item.hidden = false;
            }
        });
    }
    // itemToggle(ev: any, item): void {
    //   this.clearSearchValue();
    //   const checkedValue = ev.detail.checked;
    //   const menuItem = item;
    //   this.editableMenu.menu.categories.forEach(category => {
    //     if (this.activeSegment === category.name) {
    //       for (const section of category.sections) {
    //         for (const item of section.items) {
    //           if (item.name.toLowerCase() === menuItem.toLowerCase()) {
    //             item.is_active = checkedValue;
    //           }
    //         }
    //       }
    //     }
    //   });
    //   this.data.saveChanges(this.data.merchantId, this.editableMenu);
    //   setTimeout(() => {
    //     this.editableMenu = undefined;
    //     return this.data.getFullMenu(this.data.merchantId).subscribe(data => {
    //       this.titleService.setTitle('LiveMenu | ' + data.name);
    //       this.editableMenu = data;
    //       delete this.editableMenu._id;
    //       this.menu = data.menu.categories;
    //       for (var i in this.menu) {
    //         if (this.activeSegment === this.menu[i].name) {
    //           this.shownMenu = this.menu[i].sections;
    //         }
    //       }
    //     });
    //   }, 100);
    // }
    itemToggle(ev, item) {
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
        return Http.request({
            method: 'PUT',
            url: _models_Endpoints__WEBPACK_IMPORTED_MODULE_6__.ENDPOINTS.updateMerchantMenu + this.data.merchantId,
            headers: { "Content-Type": "application/json" },
            data: this.editableMenu
        }).then(() => {
            setTimeout(() => {
                this.editableMenu = undefined;
                return Http.get({
                    url: _models_Endpoints__WEBPACK_IMPORTED_MODULE_6__.ENDPOINTS.getFullMenu + this.data.merchantId,
                }).then(({ data }) => {
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
        });
    }
    presentLocationModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_location_modal_location_modal_component__WEBPACK_IMPORTED_MODULE_2__.LocationModalComponent,
                cssClass: 'custom-modal-class'
            });
            return modal.present();
        });
    }
    clearSearchValue() {
        const ev = {
            target: {
                value: ''
            }
        };
        this.searchValue = ev.target.value;
        this.search(ev);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 3278:
/*!*******************************************************!*\
  !*** ./src/app/home/menu-item/menu-item.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_menu_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./menu-item.component.html */ 2989);
/* harmony import */ var _menu_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item.component.scss */ 9167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);





let MenuItemComponent = class MenuItemComponent {
    constructor(data) {
        this.data = data;
        this.listOfChanges = [];
    }
    ngOnInit() { }
    isIos() {
        const win = window;
        return win && win.Ionic && win.Ionic.mode === 'ios';
    }
    itemToggle(ev, item) {
        const checkedValue = ev.detail.checked;
        const menuItem = item;
        const changedItem = {
            name: menuItem,
            value: checkedValue
        };
        this.listOfChanges.push(changedItem);
    }
};
MenuItemComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
MenuItemComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MenuItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'menu-item',
        template: _raw_loader_menu_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_menu_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MenuItemComponent);



/***/ }),

/***/ 9736:
/*!****************************************************!*\
  !*** ./src/app/home/menu-item/menu-item.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponentModule": () => (/* binding */ MenuItemComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _menu_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.component */ 3278);







let MenuItemComponentModule = class MenuItemComponentModule {
};
MenuItemComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_menu_item_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemComponent],
        exports: [_menu_item_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemComponent]
    })
], MenuItemComponentModule);



/***/ }),

/***/ 5976:
/*!*************************************************************************!*\
  !*** ./src/app/components/location-modal/location-modal.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item ion-icon {\n  margin-left: 6px;\n  margin-right: -6px;\n}\nion-item ion-label {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtBQUFSIiwiZmlsZSI6ImxvY2F0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNnB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("[app-header] {\n  height: 6rem;\n  --background: var(--ion-color-primary);\n  --border-style: none;\n  text-align: center;\n}\n[app-header] img {\n  width: 2rem;\n  height: auto;\n}\nion-segment {\n  margin-bottom: 16px;\n}\n[section-header] {\n  margin-left: 8px;\n  font-family: \"Arvo\", serif;\n  font-size: 18pt;\n}\n[menu-item] [header] {\n  font-family: \"Arvo\";\n  font-size: 14pt;\n  margin-left: 12px;\n}\n[no-border] {\n  margin-bottom: 16px;\n  --border-style: none;\n}\n[location-item] {\n  margin-bottom: 0;\n}\n[location-item] ion-row {\n  float: right;\n}\n[location-item] ion-row [location-btn] {\n  display: inline-flex;\n}\n[location-item] ion-row ion-icon {\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0E7RUFDSSxtQkFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURSO0FBS0E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FBRko7QUFLQTtFQUNJLGdCQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUVRO0VBQ0ksb0JBQUE7QUFBWjtBQUVRO0VBQ0ksaUJBQUE7QUFBWiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlthcHAtaGVhZGVyXSB7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpbWcge1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbmlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5bc2VjdGlvbi1oZWFkZXJdIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFydm9cIiwgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB0O1xufVxuXG5bbWVudS1pdGVtXSB7XG4gICAgW2hlYWRlcl0ge1xuICAgICAgICBmb250LWZhbWlseTogXCJBcnZvXCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxufVxuXG5bbm8tYm9yZGVyXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuW2xvY2F0aW9uLWl0ZW1dIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGlvbi1yb3cge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIFtsb2NhdGlvbi1idG5dIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 9167:
/*!*********************************************************!*\
  !*** ./src/app/home/menu-item/menu-item.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("[header] {\n  font-family: \"Arvo\";\n  font-size: 14pt;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2hlYWRlcl0ge1xuICBmb250LWZhbWlseTogXCJBcnZvXCI7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ 9597:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/location-modal/location-modal.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Location</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item *ngFor=\"let item of listOfLocations\">\n    <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n    <ion-label>{{item.name}}</ion-label>\n  </ion-item> -->\n  <ion-item (click)=\"dismissModal()\">\n    <ion-icon name=\"location-sharp\" color=\"primary\"></ion-icon>\n    <ion-label>W McMicken Ave, Cincinnati</ion-label>\n  </ion-item>\n  <ion-item (click)=\"dismissModal()\">\n    <ion-label>Mobile Van 1</ion-label>\n  </ion-item>\n  <ion-item (click)=\"dismissModal()\">\n    <ion-label>Mobile Van 2</ion-label>\n  </ion-item>\n  <ion-item (click)=\"dismissModal()\">\n    <ion-label>Washington Park Popup</ion-label>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar app-header>\n        <img src=\"{{data?.merchantLogo}}\" alt=\"restaurant logo\">\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"!this.data.showLoader\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-item no-border location-item>\n        <ion-grid>\n            <ion-row>\n                <ion-label color=\"primary\" (click)=\"presentLocationModal()\" location-btn>\n                    <ion-label>{{activeLocation}}</ion-label>\n                    <ion-label>\n                        <ion-icon name=\"location-sharp\"></ion-icon>\n                    </ion-label>\n                </ion-label>\n            </ion-row>\n        </ion-grid>\n    </ion-item>\n\n    <ion-item no-border>\n        <ion-searchbar [(ngModel)]=\"searchValue\" (ionChange)=\"search($event)\"></ion-searchbar>\n    </ion-item>\n\n    <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"primary\" mode=\"ios\" scrollable=\"true\"\n        value=\"{{defaultSegment}}\">\n        <ion-segment-button *ngFor=\"let category of menu\" value=\"{{category.name}}\">\n            <ion-label>{{category.name}}</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div menu-item *ngFor=\"let section of shownMenu\">\n        <ion-item *ngFor=\"let item of section.items\" [hidden]=\"item.hidden\">\n            <ion-label color=\"secondary\" header>{{item.name}}</ion-label>\n            <ion-toggle checked=\"{{item.is_active}}\" color=\"primary\" (ionChange)=\"itemToggle($event, item.name)\"\n                mode=\"ios\"></ion-toggle>\n        </ion-item>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ 2989:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/menu-item/menu-item.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div menu-item *ngIf=\"menu\">\n  <ion-item *ngFor=\"let item of menu\">\n    <ion-label color=\"secondary\" header>{{item.header}}</ion-label>\n    <ion-toggle checked=\"{{item.isActive}}\" color=\"primary\" (ionChange)=\"itemToggle($event, item.header)\" mode=\"ios\"></ion-toggle>\n  </ion-item>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
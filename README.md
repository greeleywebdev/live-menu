# LiveMenu Business Client

This client will allow businesses to have more control over their QR code menus.

## Description

LiveMenu is a frontend client where users may create merchants, menus or menu items. This  will be connected to our [backenend] service (https://github.com/greeleywebdev/live-menu-gateway) in order to retrieve these menu options for each merchant.

## Getting Started

## Dependencies
    1. Install NodeJS (https://nodejs.org/en/)
    2. Install npm (run "$ npm install -g npm")
    3. Install Ionic CLI (run "$ npm install -g @ionic/cli")
    4. Install node modules (run "$ npm install")

## Run Locally
Run "$ ionic serve"

## Build for iOS
    This uses capacitor. If you don't have Capacitor installed, do so here (https://capacitorjs.com/docs/getting-started)
1. install @capacitor/ios plugin ($ npm install @capacitor/ios)
2. Then, add the iOS platform ($ npx cap add ios)
3. Build project ($ ionic build)
4. Copy iOS web assets ($ npx cap copy ios)
5. Open Xcode ($ npx cap open ios)
6. Run Xcode project (either hit "play" button in Xcode OR $ npx cap run)



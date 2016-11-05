"use strict";
//Start Angular 1 working with Angular 2 components
var upgradeAdapter_1 = require('./upgradeAdapter');
////import components that need to be downgraded
var app_component_1 = require('./app.component');
//downgrade any angular 2 components so they can be used in angular 1
angular.module("phonecatApp").directive("myApp", upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//End Angular 1 working with Angular 2 components
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//\import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';
////import components that need to be downgraded
//\import { AppComponent } from './app.component';
//\declare var angular: any;
//\angular.module("phonecatApp").directive("myApp", <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));
//\upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//platformBrowserDynamic().bootstrapModule(AppModule);
//Start Angular 1 bootstrapping
//  angular.bootstrap(document,["phonecatApp"]);
//End Angular 1 bootstrapping 
//# sourceMappingURL=main.js.map
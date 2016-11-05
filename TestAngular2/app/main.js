"use strict";
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var upgradeAdapter_1 = require('./upgradeAdapter');
//import { AppModule } from './app.module';
////import components that need to be downgraded
var app_component_1 = require('./app.component');
angular.module("phonecatApp").directive("myApp", upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//platformBrowserDynamic().bootstrapModule(AppModule);
//Start Angular 1 bootstrapping
//  angular.bootstrap(document,["phonecatApp"]);
//End Angular 1 bootstrapping 
//# sourceMappingURL=main.js.map
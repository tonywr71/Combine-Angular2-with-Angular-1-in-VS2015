"use strict";
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
//angular.module("phonecatApp", [])
//  .directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent));
upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map
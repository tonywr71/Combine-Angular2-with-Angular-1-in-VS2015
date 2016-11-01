"use strict";
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var upgradeAdapter_1 = require('./upgradeAdapter');
//declare var angular: any;
//let upgradeAdapter = new UpgradeAdapter(AppModule);
//angular.module("phonecatApp", [])
//  .directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent));
upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map
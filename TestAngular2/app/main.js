"use strict";
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
upgradeAdapter.bootstrap(document.documentElement, ["phonecatApp"]);
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map
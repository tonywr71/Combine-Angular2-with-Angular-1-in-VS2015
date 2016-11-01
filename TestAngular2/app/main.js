"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
upgradeAdapter.bootstrap(document.documentElement, ["phonecatApp"]);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
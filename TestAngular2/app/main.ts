//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeAdapter } from '@angular/upgrade';

import { AppModule } from './app.module';

let upgradeAdapter = new UpgradeAdapter(AppModule);
upgradeAdapter.bootstrap(document.documentElement, ["phonecatApp"]);

//platformBrowserDynamic().bootstrapModule(AppModule);

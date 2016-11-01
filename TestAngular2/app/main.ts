import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

let upgradeAdapter = new UpgradeAdapter(AppModule);

//import components that need to be downgraded
import { AppComponent } from './app.component';

//declare var angular: any;
//angular.module("phonecatApp", [])
//  .directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent));

upgradeAdapter.bootstrap(document.documentElement, ["phonecatApp"]);

platformBrowserDynamic().bootstrapModule(AppModule);

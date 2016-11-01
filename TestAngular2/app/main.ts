//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { upgradeAdapter } from './upgradeAdapter';
import { AppModule } from './app.module';

//import components that need to be downgraded
import { AppComponent } from './app.component';

//declare var angular: any;

//let upgradeAdapter = new UpgradeAdapter(AppModule);

//angular.module("phonecatApp", [])
//  .directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent));

upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);

//platformBrowserDynamic().bootstrapModule(AppModule);

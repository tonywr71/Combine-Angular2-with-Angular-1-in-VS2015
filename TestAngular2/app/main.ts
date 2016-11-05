//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';

////import components that need to be downgraded
import { AppComponent } from './app.component';

declare var angular: any;
angular.module("phonecatApp").directive("myApp", <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));

upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);

//platformBrowserDynamic().bootstrapModule(AppModule);


//Start Angular 1 bootstrapping
//  angular.bootstrap(document,["phonecatApp"]);
//End Angular 1 bootstrapping
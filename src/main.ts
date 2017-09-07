import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {disableDebugTools} from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

// This line below is to overcome a bug that I encountered with the ng4-material-dropdown
// https://stackoverflow.com/questions/46097266
disableDebugTools();

const bootstrapPromise =  platformBrowserDynamic().bootstrapModule(AppModule);

// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

// if (process.ENV.env === 'production') {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule);

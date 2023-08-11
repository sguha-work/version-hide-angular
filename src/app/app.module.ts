import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
declare let document: any, window: any;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const getComponentTimer = window.setInterval(()=>{
      if(document.getElementsByTagName('app-root').length) {
        window.clearInterval(getComponentTimer);
        document.getElementsByTagName('app-root')[0].removeAttribute('ng-version');
      }
    });
  }
}

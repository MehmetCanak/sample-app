import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { GeneralHelper } from './helpers/general';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    BrowserModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    GeneralHelper
  ],
  bootstrap: [PagesComponent] //acıldıgında ilk çalışan component
})
export class PagesModule {

  constructor(private injector: Injector) 
  {
    
  }
 }

import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { NewComponent } from './new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralHelper } from './pages/helpers/general';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    GeneralHelper
  ],
  bootstrap: [
    AppComponent   //acıldıgında ilk çalışan component
  ]                     
})
export class AppModule {


  constructor(private injector: Injector) { }

  ngDoBootstrap()
  {
    
  }
 }

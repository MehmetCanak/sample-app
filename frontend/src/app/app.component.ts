import { Component } from '@angular/core';

import { BaseHelper } from './pages/helpers/base';
import { GeneralHelper } from './pages/helpers/general';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  
  constructor(private generalHelper: GeneralHelper)
  {
    BaseHelper.preLoad();
    //this.redirectToLoginIfLoggedOut()
  }

  redirectToLoginIfLoggedOut()
  {
    if(BaseHelper.token.length > 0) return;     
    this.generalHelper.navigate('/login');
  }
}
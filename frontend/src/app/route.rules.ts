import { LoginComponent } from './pages/login/login.component';
import { NewComponent } from './new/new.component';
import { BaseHelper } from './pages/helpers/base';
import { PagesModule } from './pages/pages.module';
import { PagesComponent } from './pages/pages.component';

export const RouteRules = 
[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'new',
        component: NewComponent,
    },
    {
        path: 'n',
        component: PagesComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    //{ path: '', redirectTo: BaseHelper.urlPath, pathMatch: 'full' },
];
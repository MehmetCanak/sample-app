import { LoginComponent } from './login/login.component';
import { NewComponent } from './../new/new.component';
import { BaseHelper } from './helpers/base';
import { PagesComponent } from './pages.component';

export const RouteRules = 
[{
    path: '',
    component: PagesComponent,
    children: 
    [
        {
            path: 'new',
            component: NewComponent,
        },          


    ]
}];
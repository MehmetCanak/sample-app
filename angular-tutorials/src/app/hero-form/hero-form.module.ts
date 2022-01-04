import { NgModule } from '@angular/core';
import { HeroFormRoutingModule } from './hero-form-routing.module';
import { HeroFormComponent } from './hero-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeroFormComponent
  ],
  imports: [
    HeroFormRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HeroFormModule { }

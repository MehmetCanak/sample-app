import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservablesComponent } from './observables.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';



@NgModule({
  declarations: [
  
    ObservablesComponent,
       ZippyComponent,
       ZippyMultislotComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }

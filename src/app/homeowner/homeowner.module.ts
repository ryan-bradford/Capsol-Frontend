import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeownerRoutingModule } from './homeowner-routing.module';
import { HomeownerComponent } from './homeowner.component';


@NgModule({
  declarations: [HomeownerComponent],
  imports: [
    CommonModule,
    HomeownerRoutingModule
  ]
})
export class HomeownerModule { }

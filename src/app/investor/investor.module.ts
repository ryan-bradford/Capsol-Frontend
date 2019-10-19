import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorComponent } from './investor.component';


@NgModule({
  declarations: [InvestorComponent],
  imports: [
    CommonModule,
    InvestorRoutingModule
  ]
})
export class InvestorModule { }

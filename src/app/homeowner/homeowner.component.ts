import { Component, OnInit } from '@angular/core';
import { HomeownerService } from '../_services/homeowner.service';
import { Contract } from '../_entities/Contract';
import { SolarOption } from '../_entities/SolarOption';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.less']
})
export class HomeownerComponent {

  contract: Contract;

  option: number;
  optionInfo: SolarOption;

  constructor(private homeownerService: HomeownerService) {
    localStorage.setItem('type', 'homeowner');
    this.homeownerService.getHomeowner(localStorage.getItem('email')).subscribe((result) => {
      this.contract = result.contract;
    });
  }



  setOption(option: number) {
    this.homeownerService.getOptionDetails(option).subscribe((result) => {
      console.log(result);
      this.optionInfo = result;
    });
  }

}

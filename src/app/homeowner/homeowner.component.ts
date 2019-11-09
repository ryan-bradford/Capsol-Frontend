import { Component, OnInit } from '@angular/core';
import { HomeownerService } from '../_services/homeowner.service';
import { Contract } from '../_entities/contract/Contract';
import { SolarOption } from '../_entities/contract/SolarOption';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.scss']
})
export class HomeownerComponent {

  contract: Contract;

  optionInfo: SolarOption;

  constructor(private homeownerService: HomeownerService) {
    localStorage.setItem('type', 'homeowner');
    this.homeownerService.getHomeowner(localStorage.getItem('email')).subscribe((result) => {
      if (result && result.contract) {
        this.contract = result.contract;
        console.log(this.contract.positionInQueue);
      }
    });
  }



  setOption(option: number) {
    this.homeownerService.getOptionDetails(localStorage.getItem('email'), option).subscribe((result) => {
      this.optionInfo = result;
    });
  }


  signUp(amount: number) {
    this.homeownerService.createContract(localStorage.getItem('email'), amount).subscribe();
  }

}

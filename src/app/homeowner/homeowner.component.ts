import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeownerService } from '../_services/homeowner.service';
import { Contract } from '../_entities/contract/Contract';
import { SolarOption } from '../_entities/contract/SolarOption';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeownerEstimateModalComponent } from '../pitch/homeowner-estimate/homeowner.estimate.modal';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.scss']
})
export class HomeownerComponent {

  contract: Contract;

  optionInfo: SolarOption;

  addressSet = false;
  address = new FormGroup({
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required])
  });

  electricityBill = new FormControl('', [Validators.required, Validators.min(0)]);

  @ViewChild('estimate', { static: false })
  public estimateComponent: HomeownerEstimateModalComponent;

  constructor(private homeownerService: HomeownerService) {
    localStorage.setItem('type', 'homeowner');
    this.homeownerService.getHomeowner(localStorage.getItem('email')).subscribe((result) => {
      if (result && result.contract) {
        this.contract = result.contract;
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

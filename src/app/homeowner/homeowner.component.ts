import { Component, OnInit } from '@angular/core';
import { HomeownerService } from '../_services/homeowner.service';
import { Contract } from '../_entities/Contract';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.less']
})
export class HomeownerComponent implements OnInit {

  contract: Contract;

  constructor(private homeownerService: HomeownerService) {
    localStorage.setItem('type', 'homeowner');
    this.homeownerService.getHomeowner(localStorage.getItem('email')).subscribe((result) => {
      this.contract = result.contract;
    });
  }

  ngOnInit() {
  }

}

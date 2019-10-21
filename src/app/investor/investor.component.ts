import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../_services/investor.service';
import { Investor } from '../_entities/Investor';
import { Investment } from '../_entities/Investment';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.less']
})
export class InvestorComponent {

  investor: Investor;
  investments: Investment[];
  displayedColumns: string[] = ['value'];

  constructor(
    private investorService: InvestorService) {
    localStorage.setItem('type', 'investor');
    this.investorService.getInvestor(localStorage.getItem('email')).subscribe((result) => {
      this.investor = result;
      this.investments = result.investments;
    });
  }

  addFunds() {
    this.investorService.addInvestment(localStorage.getItem('email'), 100).subscribe((result) => {
      console.log('added!');
    });
  }

  handleRequests() {

  }

}

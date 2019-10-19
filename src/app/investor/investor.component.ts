import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../_services/investor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.less']
})
export class InvestorComponent implements OnInit {

  constructor(
    private investorService: InvestorService) {
    localStorage.setItem('type', 'investor');
    this.investorService.getInvestor(localStorage.getItem('email')).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}

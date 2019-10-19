import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../services/investor.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.less']
})
export class InvestorComponent implements OnInit {

  constructor(
    private investorService: InvestorService) {
  }

  ngOnInit() {
  }

}

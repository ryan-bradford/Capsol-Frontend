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

  // Items to show:
  // 1. Total balance
  // 2. Outstanding Cash
  // 3. Effective interest rate
  // 4. Graph
  // 5. Transfer money button
  // 6. Toolbar
  //      Logout
  //      Settings button
  // 7. Key of items
  // Other Pages
  // 1. Settings
  // 2. Transfer money modal.
  // 3. Investor portfolio page

  investor: Investor;
  investments: Investment[];
  cash: number;
  chartData = [];

  constructor(
    private investorService: InvestorService) {
    localStorage.setItem('type', 'investor');
    this.investorService.getInvestor(localStorage.getItem('email')).subscribe((result) => {
      this.investor = result;
      this.investments = result ? result.investments : [];
      this.chartData = result ? this.getChartData() : [];
      this.cash = result ? result.totalCash : 0;
    });
  }

  addFunds() {
    this.investorService.addInvestment(localStorage.getItem('email'), 100).subscribe();
  }

  sellFunds() {
    this.investorService.sellInvestment(localStorage.getItem('email'), 100).subscribe();
  }

  handleRequests() {
    this.investorService.handleRequests().subscribe();
  }

  tickTime() {
    this.investorService.tickTime().subscribe();
  }

  getChartData() {
    const cashData: { name: string, value: number }[] =
      this.investor.portfolioHistory.map((port) => {
        return {
          name: String(port.month),
          value: port.cashDeposit
        };
      });
    const portfolioData: { name: string, value: number }[] =
      this.investor.portfolioHistory.map((port) => {
        return {
          name: String(port.month),
          value: port.totalValue
        };
      });
    return [{
      name: 'Total Value',
      series: portfolioData
    }, {
      name: 'Deposits',
      series: cashData
    }];
  }

}

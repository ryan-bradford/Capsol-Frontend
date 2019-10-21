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
  chartData = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private investorService: InvestorService) {
    localStorage.setItem('type', 'investor');
    this.investorService.getInvestor(localStorage.getItem('email')).subscribe((result) => {
      this.investor = result;
      this.investments = result ? result.investments : [];
      this.chartData = result ? this.getChartData() : [];
    });
  }

  addFunds() {
    this.investorService.addInvestment(localStorage.getItem('email'), 100).subscribe();
  }

  handleRequests() {
    this.investorService.handleRequests().subscribe();
  }

  tickTime() {
    this.investorService.tickTime().subscribe();
  }

  getChartData() {
    const cashData: { name: string, value: number }[] = [];
    const portfolioData: { name: string, value: number }[] = [];
    for (let i = this.investor.getEarliestMonthActive(); i <= this.investor.getLastMonthActive(); i++) {
      cashData.push({
        name: String(i),
        value: this.investor.getDepositsAtMonth(i)
      });
      portfolioData.push({
        name: String(i),
        value: this.investor.getValueAtMonth(i)
      });
    }
    return [{
      name: 'Total Value',
      series: portfolioData
    }, {
      name: 'Deposits',
      series: cashData
    }];
  }

}

import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../_services/investor.service';
import { Investor } from '../_entities/user/Investor';
import { Investment } from '../_entities/investment/Investment';
import { PortfolioHistory } from '../_entities/investment/PortfolioHistory';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
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
  // 3. Transactions page

  investor: Investor;
  investments: Investment[];
  cash: number;
  portfolioHistory: PortfolioHistory[] = [];
  totalValue: number;
  earnings: number;
  interestRate: number;

  constructor(
    private investorService: InvestorService) {
    localStorage.setItem('type', 'investor');
    this.investorService.getInvestor(localStorage.getItem('email')).subscribe((result) => {
      if (result) {
        this.investor = result;
        this.investments = result.investments;
        this.portfolioHistory = result.portfolioHistory;
        this.cash = Math.round(result.totalCash * 100) / 100;
        this.totalValue = result.portfolioHistory.length
          ? Math.round(result.portfolioHistory[result.portfolioHistory.length - 1].totalValue * 100) / 100 : 0;
        const finalDeposits = result.portfolioHistory.length
          ? Math.round(result.portfolioHistory[result.portfolioHistory.length - 1].cashDeposit * 100) / 100 : 0;
        this.earnings = this.totalValue - finalDeposits;
        this.earnings = Math.round(this.earnings * 100) / 100;
        this.interestRate = Math.round((result.interestRate) * 1000) / 1000;
      }
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

}

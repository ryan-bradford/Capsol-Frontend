import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HomeownerEstimateModalComponent } from './homeowner-estimate/homeowner.estimate.modal';
import { PortfolioHistory } from '../_entities/investment/PortfolioHistory';
import { StatService } from '../_services/stat.service';
import { HomeownerStat } from '../_entities/pitch/HomeownerStat';
import { InvestorStat } from '../_entities/pitch/InvestorStat';
import { InvestorEstimateModalComponent } from './investor-estimate/investor.estimate.modal';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent {

  selected: 'homeowner' | 'investor';
  cash = 0;
  portfolioHistory: PortfolioHistory[] = [];
  interestRate: number;

  homeownerStatInfo: HomeownerStat;
  investorStatInfo: InvestorStat;

  constructor(
    private router: Router, public dialog: MatDialog,
    private statService: StatService) { }


  public redirectToInvestor() {
    localStorage.setItem('type', 'investor');
    this.router.navigate(['/investor']);
  }

  public redirectToHomeowner() {
    localStorage.setItem('type', 'homeowner');
    this.router.navigate(['/homeowner']);
  }

  public selectHomeowner() {
    this.selected = 'homeowner';
    this.statService.getHomeownerStats().subscribe((result) => {
      this.homeownerStatInfo = result;
    });
    this.showInfo();
  }

  public selectInvestor() {
    this.selected = 'investor';
    this.statService.getInvestorStats().subscribe((result) => {
      this.investorStatInfo = result;
    });
    this.statService.getHistoricalPerformance().subscribe((result) => {
      this.interestRate = result.interestRate;
      this.portfolioHistory = result.portfolioHistory;
    });
    this.showInfo();
  }

  public getHomeownerEstimate() {
    this.dialog.open(HomeownerEstimateModalComponent);
  }

  public getInvestorEstimate() {
    this.dialog.open(InvestorEstimateModalComponent);
  }

  private showInfo() {
    const el: HTMLElement = document.getElementById('awards');
    new Promise(resolve => setTimeout(resolve, 200)).then((fin) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
  }

}

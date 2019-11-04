import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Investment } from 'src/app/_entities/Investment';
import { PortfolioHistory } from 'src/app/_entities/PortfolioHistory';

@Component({
    selector: 'app-investor-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class InvestorGraphComponent implements OnChanges {

    @Input()
    portfolioHistory: PortfolioHistory[] = [];

    @Input()
    cash: number;

    @Input()
    interestRate: number;

    view: [number, number] = [window.innerWidth * 0.8, window.innerHeight * 0.6];

    // options
    amountEarned = 0;
    chartData = [];
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

    displayedColumns: string[] = ['value'];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.chartData = this.getChartData();
        this.amountEarned = this.getAmountEarned();
    }

    getAmountEarned(): number {
        if (!this.portfolioHistory.length) {
            return 0;
        }
        return Math.round((this.portfolioHistory[this.portfolioHistory.length - 1].totalValue -
            this.portfolioHistory[this.portfolioHistory.length - 1].cashDeposit) * 100) / 100;
    }

    getChartData() {
        const cashData: { name: string, value: number }[] =
            this.portfolioHistory.map((port) => {
                return {
                    name: String(port.month),
                    value: port.cashDeposit
                };
            });
        const portfolioData: { name: string, value: number }[] =
            this.portfolioHistory.map((port) => {
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

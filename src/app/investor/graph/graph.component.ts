import { Component, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild, AfterViewInit } from '@angular/core';
import { PortfolioHistory } from 'src/app/_entities/investment/PortfolioHistory';
import { ThemeEmitterComponent } from 'src/app/_components/theme.emitter';

@Component({
    selector: 'app-investor-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})
export class InvestorGraphComponent implements OnChanges, AfterViewInit {

    @ViewChild(ThemeEmitterComponent, { static: true }) theme: ThemeEmitterComponent;

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
    xAxisLabel = 'Month';
    showYAxisLabel = true;
    yAxisLabel = 'Value ($)';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    displayedColumns: string[] = ['value'];

    monthNames = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June',
        'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.chartData = this.getChartData();
        this.amountEarned = this.getAmountEarned();
    }

    ngAfterViewInit() {
        this.colorScheme = {
            domain: [this.theme.accentColor, this.theme.primaryColor, '#C7B42C', '#AAAAAA']
        };
    }

    getAmountEarned(): number {
        if (!this.portfolioHistory.length) {
            return 0;
        }
        return Math.round((this.portfolioHistory[this.portfolioHistory.length - 1].totalValue -
            this.portfolioHistory[this.portfolioHistory.length - 1].cashDeposit) * 100) / 100;
    }

    getChartData() {
        const maxMonth = this.portfolioHistory[this.portfolioHistory.length - 1].month;
        const cashData: { name: string, value: number }[] =
            this.portfolioHistory.map((port) => {
                return {
                    name: String(this.getMonthAsString(port.month, maxMonth)),
                    value: port.cashDeposit
                };
            });
        const portfolioData: { name: string, value: number }[] =
            this.portfolioHistory.map((port) => {
                return {
                    name: String(this.getMonthAsString(port.month, maxMonth)),
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

    getMonthAsString(month: number, maxMonth: number): string {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const offSet = currentMonth % 12 - maxMonth % 12;
        let diff = (month + offSet);
        if (diff < 0) {
            diff += 12;
        }
        const monthsBefore = maxMonth - month - currentMonth + 12;
        const yearsBefore = Math.floor(monthsBefore / 12);
        return this.monthNames[diff % 12] + ' ' + String(currentYear - yearsBefore);
    }

}

import { Component, Input } from '@angular/core';
import { Investment } from 'src/app/_entities/Investment';

@Component({
    selector: 'app-investor-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.less']
})
export class InvestorGraphComponent {

    @Input()
    chartData = [];

    @Input()
    cash: number;

    view: [number, number] = [window.innerWidth * 0.8, window.innerHeight * 0.6];

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

    displayedColumns: string[] = ['value'];

    constructor() {
    }

    getAmountEarned(): number {
        return Math.round((this.chartData[0].series[this.chartData[0].series.length - 1].value -
            this.chartData[1].series[this.chartData[1].series.length - 1].value) * 100) / 100;
    }

}

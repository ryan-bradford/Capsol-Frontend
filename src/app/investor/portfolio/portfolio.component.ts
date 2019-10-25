import { Component } from '@angular/core';
import { Investment } from 'src/app/_entities/Investment';

@Component({
    selector: 'app-portfolio-table',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent {

    investments: Investment[];
    cash: number;
    displayedColumns: string[] = ['value', 'date'];

    constructor() {
    }

}

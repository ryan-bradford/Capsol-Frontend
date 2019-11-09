import { Component } from '@angular/core';
import { Investment } from 'src/app/_entities/investment/Investment';

@Component({
    selector: 'app-requests-table',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss']
})
export class RequestsComponent {

    investments: Investment[];
    cash: number;
    displayedColumns: string[] = ['value', 'date'];

    constructor() {
    }

}

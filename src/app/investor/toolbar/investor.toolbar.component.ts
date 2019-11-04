import { Component } from '@angular/core';
import { Investment } from 'src/app/_entities/Investment';

@Component({
    selector: 'app-investor-toolbar',
    templateUrl: './investor.toolbar.component.html',
    styleUrls: ['./investor.toolbar.component.scss']
})
export class InvestorToolbarComponent {

    email = localStorage.getItem('email');

    constructor() {
    }

}

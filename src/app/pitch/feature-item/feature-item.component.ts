import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-feature-item',
    templateUrl: './feature-item.component.html',
    styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent {

    constructor(private router: Router) {
    }

}

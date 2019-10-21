import { Component, OnInit } from '@angular/core';
import { HomeownerService } from '../_services/homeowner.service';

@Component({
  selector: 'app-homeowner',
  templateUrl: './homeowner.component.html',
  styleUrls: ['./homeowner.component.less']
})
export class HomeownerComponent implements OnInit {

  constructor(private homeownerService: HomeownerService) {
    localStorage.setItem('type', 'homeowner');
    this.homeownerService.getHomeowner(localStorage.getItem('email')).subscribe((result) => {
    });
  }

  ngOnInit() {
  }

}

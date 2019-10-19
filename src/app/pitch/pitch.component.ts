import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.less']
})
export class PitchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public redirectToInvestor() {
    localStorage.setItem('type', 'investor');
    this.router.navigate(['/investor'], { replaceUrl: true });
  }

  public redirectToHomeowner() {
    localStorage.setItem('type', 'homeowner');
    this.router.navigate(['/homeowner'], { replaceUrl: true });
  }


}

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
    this.router.navigate(['./investor']);
  }

  public redirectToHomeowner() {
    this.router.navigate(['./homeowner']);
  }


}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent {

  constructor(private router: Router) { }

  selectMarker() {
    const el: HTMLElement = document.getElementById('awards');
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }


  public redirectToInvestor() {
    localStorage.setItem('type', 'investor');
    this.router.navigate(['/investor']);
  }

  public redirectToHomeowner() {
    localStorage.setItem('type', 'homeowner');
    this.router.navigate(['/homeowner']);
  }


}

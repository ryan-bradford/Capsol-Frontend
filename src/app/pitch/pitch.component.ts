import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent {

  selected: 'homeowner' | 'investor';

  constructor(private router: Router) { }


  public redirectToInvestor() {
    localStorage.setItem('type', 'investor');
    this.router.navigate(['/investor']);
  }

  public redirectToHomeowner() {
    localStorage.setItem('type', 'homeowner');
    this.router.navigate(['/homeowner']);
  }

  public selectHomeowner() {
    this.selected = 'homeowner';
    this.showInfo();
  }

  public selectInvestor() {
    this.selected = 'investor';
    this.showInfo();
  }

  private showInfo() {
    const el: HTMLElement = document.getElementById('awards');
    new Promise(resolve => setTimeout(resolve, 200)).then((fin) => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
  }

}

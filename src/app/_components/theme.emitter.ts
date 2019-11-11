import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-theme-emitter',
    template: `<div #primary class='primary'></div>
               <div #accent class='accent'></div>
               <div #warn class='warn'></div>`,
    styles: [':host { display: none; }']
})
export class ThemeEmitterComponent implements AfterViewInit {

    primaryColor: string;
    accentColor: string;
    warnColor: string;

    @ViewChild('primary', { static: false }) primaryElement: ElementRef;
    @ViewChild('accent', { static: false }) accentElement: ElementRef;
    @ViewChild('warn', { static: false }) warnElement: ElementRef;

    ngAfterViewInit() {
        console.log(this.primaryElement);
        this.primaryColor = getComputedStyle(this.primaryElement.nativeElement).color;
        this.accentColor = getComputedStyle(this.accentElement.nativeElement).color;
        this.warnColor = getComputedStyle(this.primaryElement.nativeElement).color;
    }
}

import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EasingLogic } from 'ng2-page-scroll';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  top: string;
  sections: string[] = ['home', 'games', 'about', 'contact'];
  focusedSection: string;

  justScrolled: boolean;
  timer: any;

  @ViewChild('scroller', { static: true })
  scroller: ElementRef;

  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) { return b; }
        if (t === d) { return b + c; }
        if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  @HostListener('window:scroll', ['$event'])
  scrollHandle(event) {
    this.determinePageLocation();

    this.justScrolled = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.justScrolled = false;
    }, 250);
  }

  determinePageLocation() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    this.top = 131 * window.scrollY / height  + '%';

    const scrollLocation = Math.round(window.scrollY / html.clientHeight);
    const index = Math.min( scrollLocation, this.sections.length - 1);
    this.focusedSection = this.sections[index];
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.determinePageLocation();
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { EasingLogic } from 'ng2-page-scroll';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sections: string[] = ['home', 'games', 'about', 'contact']
  focusedSection: string;

  @HostListener('window:scroll', ['$event'])
  scrollHandle(event) {
    this.determinePageLocation();
  }

  determinePageLocation(){
    const scrollLocation = Math.round(window.scrollY / document.documentElement.clientHeight);
    const index = Math.min( scrollLocation, this.sections.length-1);
    this.focusedSection = this.sections[index];
  }

  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  // constructor(private router: Router) { }

  ngOnInit() {
    this.determinePageLocation();
  }
}

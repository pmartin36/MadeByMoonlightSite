import { Component, OnInit } from '@angular/core';

declare var System: any;

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  constructor() { }

  showMailingModal () {
    //System.import('./mojo.js').then(m => m.showModal());
  }

}

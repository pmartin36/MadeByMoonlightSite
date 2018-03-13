import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContactSectionComponent } from './Sections/contact-section/contact-section.component';
import { AboutSectionComponent } from './Sections/about-section/about-section.component';
import { GamesSectionComponent } from './Sections/games-section/games-section.component';
import { HomeSectionComponent } from './Sections/home-section/home-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactSectionComponent,
    AboutSectionComponent,
    GamesSectionComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

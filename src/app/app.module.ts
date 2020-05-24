import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ContactSectionComponent } from './Sections/contact-section/contact-section.component';
import { AboutSectionComponent } from './Sections/about-section/about-section.component';
import { GamesSectionComponent } from './Sections/games-section/games-section.component';
import { HomeSectionComponent } from './Sections/home-section/home-section.component';
import { GameService, CanActivateGameDetails } from './shared/index';
import { GameDetailsComponent } from './game-details/game-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactSectionComponent,
    AboutSectionComponent,
    GamesSectionComponent,
    HomeSectionComponent,
    GameDetailsComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '404', component: NotFoundComponent },
      { path: ':name', component: GameDetailsComponent, canActivate: [CanActivateGameDetails] },
      { path: '**', component: NotFoundComponent },
    ]),
    Ng2PageScrollModule
  ],
  providers: [
    GameService,
    CanActivateGameDetails
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

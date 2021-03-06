import { Component, OnInit, Sanitizer, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameModel, GameService, StoreLink } from '../shared';
import { PlatformLocation } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: GameModel;
  types: StoreLink[] = [];
  hasTextShadow = false;

  constructor(
      private route: ActivatedRoute,
      private gameService: GameService,
      private location: PlatformLocation,
      private router: Router,
      private domSanitizer: DomSanitizer,
      private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.game = this.gameService.getGameFromUrlName(params['name']);
      this.game.types.forEach((value, key) => {
        this.types.push(value);
      });

      if (this.game.style && this.game.style['text-shadow']) {
        this.hasTextShadow = true;
        this.game.style['text-shadow'] = null;
      }
    });

    const body = document.body;
    const html = document.documentElement;
    const width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.clientWidth, html.offsetWidth );
  }

  getTrailerUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.game.trailerUrl);
  }
}

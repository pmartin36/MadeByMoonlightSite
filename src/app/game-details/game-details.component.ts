import { Component, OnInit, Sanitizer } from '@angular/core';
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

  constructor(
      private route: ActivatedRoute, 
      private gameService: GameService, 
      private location: PlatformLocation,
      private router: Router,
      private domSanitizer: DomSanitizer) {
    this.location.onPopState(() => {
      this.router.navigate([''], {fragment: '#games'});
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.game = this.gameService.getGameFromUrlName(params['name']);
      this.game.types.forEach((value,key) => {
        this.types.push(value);
      });
   });
  }
  
  getTrailerUrl(){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.game.trailerUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { GameModel, GameService } from '../../shared/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-section',
  templateUrl: './games-section.component.html',
  styleUrls: ['./games-section.component.css']
})
export class GamesSectionComponent implements OnInit {

  filterType = 'all';
  filteredGames: GameModel[];
  selectedIndex = 0;
  mobile: boolean;

  get selectedGame() {
    return this.filteredGames[this.selectedIndex];
  }

  constructor(private gameService: GameService, private router: Router) {
    this.filteredGames = gameService.games;
  }

  ngOnInit() {
    if (window.screen.width <= 480) { // 768px portrait
      this.mobile = true;
    }
  }

  routeToSelectedGame() {
    this.router.navigate(['/', this.selectedGame.urlname || this.selectedGame.name]);
  }

  thumbnailClicked(index: number) {
    if (this.selectedIndex === index) {
      this.routeToSelectedGame();
    } else {
      this.selectedIndex = index;
    }
  }

  setFilter(type: string) {
    this.filterType = type;
    const currentGame = this.selectedGame;
    this.filteredGames = this.gameService.applyFilter(type);

    const newIndex = this.filteredGames.indexOf(currentGame);
    if (newIndex === -1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = newIndex;
    }
  }
}


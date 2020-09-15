import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService, GameModel } from '../shared';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  model: GameModel;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.model = this.gameService.getGameFromUrlName(params['name']);
      if(!this.model) {
        this.router.navigate(['/404']);
      }
    });
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GameService } from './game.service';

@Injectable()
export class CanActivateGameDetails implements CanActivate {

    constructor(private gameService: GameService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.gameService.getGameFromUrlName(route.params.name)) {
            this.router.navigate(['/404']);
            return false;
        }
        return true;
    }
}

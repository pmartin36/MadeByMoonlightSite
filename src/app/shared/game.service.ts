import { Injectable } from "@angular/core";
import { GameModel } from ".";

@Injectable()
export class GameService {

    games: GameModel[];

    constructor() {
        this.games = [
            {
                name: 'Solar Express', 
                urlname: 'solar-express',
                types: new Map([
                    ['android', {url: 'https://play.google.com/store/apps/details?id=com.madebymoonlight.solarexpress', imageUrl: '/assets/google-play-badge.png'}]
                ]), 
                thumbnailImageUrl:'/assets/solar-express-icon.png',
                backdropImageUrl: '/assets/solar-express-background.jpg',
                blowupImageUrl: '/assets/solar-express-blowup.png',
                trailerUrl: 'https://www.youtube.com/embed/ALHqt7_kMzs?autoplay=0',
                availability: 'Coming out April 2018!',
                style: {
                    'color': 'white',
                    'font-family': 'solar-express',
                    'font-style': 'default'
                }
            }
        ];
    }

    gameIsPC(game: GameModel) {
        return game.types.has('steam') || game.types.has('pc');
    }

    gameisMobile(game: GameModel) {
        return game.types.has('android') || game.types.has('ios') || game.types.has('mobile');
    }

    applyFilter(type: string): GameModel[] {
        if(type === 'all'){
            return this.games;
        }
        else if(type === 'mobile'){
            return this.games.filter( g => this.gameisMobile(g) );
        }
        else if(type === 'pc'){
            return this.games.filter( g => this.gameIsPC(g) );
        }
        else{
            return this.games.filter( g => g.types.has(type) );
        }
    }

    getGameFromName(name: string){
        return this.games.find(g => g.name === name);
    }

    getGameFromUrlName(urlname: string){
        return this.games.find(g => (g.urlname || g.name) === urlname);
    }
}
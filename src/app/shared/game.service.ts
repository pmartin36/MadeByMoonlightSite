import { Injectable } from '@angular/core';
import { GameModel } from '.';
import { PricingModel } from './model';

@Injectable()
export class GameService {

    games: GameModel[];

    constructor() {
        this.games = [
            {
                name: 'The 16 Spaces',
                urlname: 'the-16-spaces',
                pricingModel: PricingModel.Freemium,
                types: new Map([
                    [
                        'android',
                        {
                            url: 'https://play.google.com/store/apps/details?id=com.MadeByMoonlight.The16Spaces',
                            imageUrl: '/assets/google-play-badge.png'
                        }
                    ],
                    [
                        'ios',
                        {
                            url: 'https://apps.apple.com/app/id1531790358',
                            imageUrl: '/assets/app-store-badge.png'
                        }
                    ],
                ]),
                thumbnailImageUrl: '/assets/the-16-spaces-icon.png',
                backdropImageUrl: '/assets/the-16-spaces-background.png',
                blowupImageUrl: '/assets/the-16-spaces-blowup.png',
                trailerUrl: 'https://www.youtube.com/embed/-3-FerGlLPI?autoplay=0',
                availability: 'Available now on Android!',
                style: {
                    'background-image' : 'linear-gradient(15deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                    'background-clip': 'text',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'font-family': 'didact gothic',
                    'font-style': 'default',
                    'text-shadow': 'true',
                    'color': 'transparent'
                }
            },
            {
                name: 'Solar Express',
                urlname: 'solar-express',
                pricingModel: PricingModel.Free,
                types: new Map([
                    ['android',
                    {
                        url: 'https://play.google.com/store/apps/details?id=com.MadebyMoonlight.SolarExpress',
                        imageUrl: '/assets/google-play-badge.png'
                    }]
                ]),
                thumbnailImageUrl: '/assets/solar-express-icon.png',
                backdropImageUrl: null,
                blowupImageUrl: '/assets/solar-express-blowup.png',
                trailerUrl: 'https://www.youtube.com/embed/ALHqt7_kMzs?autoplay=0',
                availability: 'Available now!',
                style: {
                    'color': 'white',
                    'font-family': 'solar-express',
                    'font-style': 'default',
                    'font-size': '0.6em'
                }
            },
        ];
    }

    gameIsPC(game: GameModel) {
        return game.types.has('steam') || game.types.has('pc');
    }

    gameisMobile(game: GameModel) {
        return game.types.has('android') || game.types.has('ios') || game.types.has('mobile');
    }

    applyFilter(type: string): GameModel[] {
        if (type === 'all') {
            return this.games;
        } else if (type === 'mobile') {
            return this.games.filter( g => this.gameisMobile(g) );
        } else if (type === 'pc') {
            return this.games.filter( g => this.gameIsPC(g) );
        } else {
            return this.games.filter( g => g.types.has(type) );
        }
    }

    getGameFromName(name: string) {
        return this.games.find(g => g.name === name);
    }

    getGameFromUrlName(urlname: string) {
        return this.games.find(g => (g.urlname || g.name) === urlname);
    }
}

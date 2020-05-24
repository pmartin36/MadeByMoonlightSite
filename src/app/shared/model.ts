export interface GameModel {
    name: string;
    urlname?: string;
    types: Map<string, StoreLink>;
    thumbnailImageUrl: string;
    backdropImageUrl?: string;
    blowupImageUrl?: string;
    trailerUrl?: string;
    availability?: string;
    style?: {[prop: string]: string};
}

export interface StoreLink {
    url: string;
    imageUrl: string;
}

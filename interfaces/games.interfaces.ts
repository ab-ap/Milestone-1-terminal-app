export interface Game {
    id: string;
    name: string;
    description: string;
    rating: number;
    isActive: boolean;
    releaseDate: string;
    imageUrl: string;
    genre: string;
    platforms: string[];
    developer: Developer;
  }
  
  export interface Developer {
    id: string;
    name: string;
    foundedYear: number;
    country: string;
  }
  
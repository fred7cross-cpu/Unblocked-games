
export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  iframeUrl: string;
  description: string;
  developer?: string;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  SPORTS = 'Sports',
  RETRO = 'Retro',
  DRIVING = 'Driving',
  MULTIPLAYER = 'Multiplayer'
}

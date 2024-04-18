import { createContext } from 'react';
import {GameState} from "@/types.ts";


interface IGameStateContext {
  gameState: GameState,
  startGame: () => void,
  gameOver: () => void,
  onPause: () => void,
  offPause: () => void,
  togglePause: () => void,
  updateGameCounters: (rows: number) => void,
}

const defaultState: IGameStateContext = {
  gameState: {
    game: false,
    gameOver: false,
    pause: false,
    scope: 0,
    level: 0,
    lines: 0,
  },
  startGame: () => {},
  gameOver: () => {},
  onPause: () => {},
  offPause: () => {},
  togglePause: () => {},
  updateGameCounters: () => {},
}


const GameStateContext = createContext<IGameStateContext>(defaultState);

export default GameStateContext;

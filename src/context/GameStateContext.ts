import {createContext} from 'react';
import {GameState, ModalState} from "@/types.ts";


interface IGameStateContext {
  gameState: GameState,
  startGame: () => void,
  gameOver: () => void,
  togglePause: () => void,
  updateGameCounters: (rows: number) => void,
}

const defaultState: IGameStateContext = {
  gameState: {
    game: false,
    modalState: ModalState.startGame,
    scope: 0,
    level: 0,
    lines: 0,
  },
  startGame: () => {},
  gameOver: () => {},
  togglePause: () => {},
  updateGameCounters: () => {},
}


const GameStateContext = createContext<IGameStateContext>(defaultState);

export default GameStateContext;

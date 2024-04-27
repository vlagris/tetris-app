import {useState} from "react";
import {GameState, ModalState} from "@/types.ts";
import GameStateContext from "@/context/GameStateContext.ts";
import Tetris from "./components/Tetris";
import Modal from "@components/Modal/modal.tsx";


function App() {
  const [gameState, setGameState] = useState<GameState>({
    game: false,
    modalState: ModalState.startGame,
    scope: 0,
    level: 0,
    lines: 0,
  });


  function startGame() {
    setGameState({
      ...gameState,
      game: true,
      modalState: ModalState.none,
      scope: 0,
      level: 1,
      lines: 0,
    })
  }


  function gameOver() {
    setGameState({
      ...gameState,
      game: false,
      modalState: ModalState.gameOver
    })
  }


  function togglePause() {
    setGameState( prev => {
      if (prev.modalState === ModalState.none) {
        return { ...prev, modalState: ModalState.pause }
      }
      if (prev.modalState === ModalState.pause) {
        return { ...prev, modalState: ModalState.none }
      }
      return prev;
    })
  }


  function updateGameCounters(rows: number) {
    if (!rows) {
      return
    }
    setGameState({
      ...gameState,
      scope: gameState.scope + (100 * rows * Math.min(rows, 2)),
      lines: gameState.lines + rows,
      level: Math.ceil((gameState.lines + rows) / 10),
    });
  }


  return (
    <GameStateContext.Provider value={{gameState, startGame, gameOver, togglePause, updateGameCounters}}>
      <Tetris/>
      <Modal/>
    </GameStateContext.Provider>
  )
}

export default App

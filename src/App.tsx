import {useState} from "react";
import {GameState} from "@/types.ts";
import GameStateContext from "@/context/GameStateContext.ts";
import Tetris from "./components/Tetris";
import Modal from "@components/Modal/modal.tsx";


function App() {
  const [gameState, setGameState] = useState<GameState>({
    game: false,
    gameOver: false,
    pause: false,
    scope: 0,
    level: 0,
    lines: 0,
  });

  function startGame() {
    setGameState({
      ...gameState,
      game: true,
      gameOver: false,
      pause: false ,
      scope: 0,
      level: 1,
      lines: 0,
    })
  }

  function gameOver() { setGameState({ ...gameState, gameOver: true }) }
  function onPause() { setGameState({ ...gameState, pause: true }) }
  function offPause() { setGameState({ ...gameState, pause: false }) }

  function togglePause() {
    setGameState( prev => {
      if (prev.game && !prev.gameOver) {
        return { ...prev, pause: !prev.pause }
      }
      return prev
    })
  }

  function updateGameCounters(rows: number) {
    if (!rows) {
      return
    }
    const nextGameState = {
      ...gameState,
      scope: gameState.scope + (100 * rows * Math.min(rows, 2)),
      lines: gameState.lines + rows,
      level: Math.ceil((gameState.lines + rows) / 10),
    }
    setGameState(nextGameState)
  }


  return (
    <GameStateContext.Provider value={{gameState, startGame, gameOver, onPause, offPause, togglePause, updateGameCounters}}>
      <Tetris/>
      <Modal/>
    </GameStateContext.Provider>
  )
}

export default App

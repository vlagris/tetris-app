import {useContext, useEffect, useRef} from "react";
import GameStateContext from "@/context/GameStateContext.ts";


function useInterval(callback: () => void, delay: number): void {
  const {gameState} = useContext(GameStateContext);
  const callbackRef = useRef(() => {});

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);


  useEffect(() => {
      if (!gameState.game || gameState.gameOver || gameState.pause) {
        return
      }

    function tick() {
      callbackRef.current();
    }

    const intervalID = setInterval(tick, delay);
    return () => {
      clearInterval(intervalID);
    };
  }, [gameState.game, gameState.gameOver, gameState.pause, delay]);
}

export default useInterval;


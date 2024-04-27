import {useContext, useEffect, useRef} from "react";
import GameStateContext from "@/context/GameStateContext.ts";
import {ModalState} from "@/types.ts";


function useInterval(callback: () => void, delay: number): void {
  const {gameState} = useContext(GameStateContext);
  const callbackRef = useRef(() => {});


  useEffect(() => {
    if (!gameState.game || gameState.modalState !== ModalState.none) {
      return callbackRef.current = () => {};
    }
    callbackRef.current = callback;
  }, [callback, gameState.game, gameState.modalState]);


  useEffect(() => {
    function tick() {
      callbackRef.current();
    }

    const intervalID = setInterval(tick, delay);
    return () => {
      clearInterval(intervalID);
    };
  }, [delay]);
}

export default useInterval;


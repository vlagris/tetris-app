import {useContext, useEffect, useRef} from "react";
import GameStateContext from "@/context/GameStateContext.ts";


enum MovementsNames {
  left = "left",
  right = "right",
  rotate = "rotate",
  drop = "drop",
  fullDrop = "fullDrop",
}

type KeyDownConfig = { [key in MovementsNames]: () => void };



const movementsCodesMap: {[key in MovementsNames]: string[]} = {
  [MovementsNames.left]: ["KeyA", "ArrowLeft"],
  [MovementsNames.right]: ["KeyD", "ArrowRight"],
  [MovementsNames.rotate]: ["KeyW", "ArrowUp"],
  [MovementsNames.drop]: ["KeyS", "ArrowDown"],
  [MovementsNames.fullDrop]: ["Space"],
}
function useKeyboardControls(keyDownConfig: KeyDownConfig): void {
  const {togglePause} = useContext(GameStateContext);
  const keyDownConfigRef = useRef<KeyDownConfig>({});


  useEffect(() => {
    keyDownConfigRef.current = keyDownConfig;
  }, [keyDownConfig]);


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape" && !event.repeat) {
        togglePause()
      }

      Object.keys(keyDownConfigRef.current).forEach(movement => {
        if(event.repeat && movement !== MovementsNames.drop) {
          return;
        }
        if (movementsCodesMap[movement as MovementsNames].includes(event.code)) {
          keyDownConfigRef.current[movement as MovementsNames]()
        }
      });
    }

    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [])
}

export default useKeyboardControls;


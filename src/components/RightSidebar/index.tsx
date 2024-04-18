import {useContext} from "react";
import {Shape} from "@/types.ts";
import GameStateContext from "@/context/GameStateContext.ts";
import NextShape from "@components/RightSidebar/NextShape.tsx";
import PauseButton from "@components/RightSidebar/PauseButton.tsx";

function RightSidebar({nextShape}: {nextShape: Shape}) {
  const {gameState, onPause} = useContext(GameStateContext);

  return (
    <div className="sidebar right-sidebar">
      <NextShape shape={gameState.game? nextShape : null}/>
      <PauseButton onClick={onPause}/>
    </div>
  );
}


export default RightSidebar;
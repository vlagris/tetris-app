import {useContext} from "react";
import GameStateContext from "@/context/GameStateContext.ts";
import Counter from "@components/LeftSidebar/Counter.tsx";

function LeftSidebar() {
  const {gameState} = useContext(GameStateContext);

  return (
    <div className="sidebar">
      <Counter title={"Score"} value={gameState.scope}/>
      <Counter title={"Lines"} value={gameState.lines}/>
      <Counter title={"Level"} value={gameState.level}/>
    </div>
  );
}

export default LeftSidebar;
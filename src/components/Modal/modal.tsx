import {useContext} from 'react';
import {createPortal} from "react-dom";
import GameStateContext from "@/context/GameStateContext.ts";
import StartMenu from "@components/Modal/StartMenu.tsx";
import PauseMenu from "@components/Modal/PauseMenu.tsx";
import GameOverMenu from "@components/Modal/GameOverMenu.tsx";
import Panel from "@components/RightSidebar/Panel.tsx";


export type ModalMenuProps = {
  startGame?: () => void,
  offPause?: () => void
}


function Modal() {
  const {gameState, startGame, offPause} = useContext(GameStateContext);
  let Component = null;

  if (gameState.gameOver) {
    Component = ({startGame}: ModalMenuProps) => <GameOverMenu startGame={startGame}/>
  } else if (gameState.pause) {
    Component = ({offPause}: ModalMenuProps) => <PauseMenu offPause={offPause}/>
  } else if (!gameState.game) {
    Component = ({startGame}: ModalMenuProps) => <StartMenu startGame={startGame}/>
  }


  return createPortal(
    (
      <>
        {Component &&
          <div className="modal">
            <div className="modal-panel-white-border">
              <div className="modal-panel-gray-border">
                  {/*<Panel>*/}
                <div className="modal-panel">
                  <Component startGame={startGame} offPause={offPause}/>
                </div>
                  {/*</Panel>*/}
              </div>
            </div>
          </div>
        }
      </>
    ),
    document.body
  );

}

export default Modal;
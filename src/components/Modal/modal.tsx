import React, {useContext, useState} from 'react';
import {ModalState} from "@/types.ts";
import {createPortal} from "react-dom";
import GameStateContext from "@/context/GameStateContext.ts";
import useKeyboardControls from "@/hooks/useKeyboardControls.ts";
import StartMenu from "@components/Modal/StartMenu.tsx";
import PauseMenu from "@components/Modal/PauseMenu.tsx";
import GameOverMenu from "@components/Modal/GameOverMenu.tsx";
import HelpMenu from "@components//Modal/HelpMenu.tsx";


export type ModalMenuProps = {
  startGame?: () => void,
  togglePause?: () => void,
  toggleHelp?: () => void,
}

type ModalComponent = {
  [key in ModalState]: ( (props: ModalMenuProps) => React.JSX.Element ) | null
} & {
  help: (props: ModalMenuProps) => React.JSX.Element
}


const ModalComponentMap: ModalComponent = {
  help: (props: ModalMenuProps) => <HelpMenu {...props}/>,
  [ModalState.startGame]: (props: ModalMenuProps) => <StartMenu {...props}/>,
  [ModalState.gameOver]: (props: ModalMenuProps) => <GameOverMenu {...props}/>,
  [ModalState.pause]: (props: ModalMenuProps) => <PauseMenu {...props}/>,
  [ModalState.none]: null,
}


function Modal() {
  const {gameState, startGame, togglePause} = useContext(GameStateContext);
  const [helpMenu, setHelpMenu] = useState(false);
  const Component = ModalComponentMap[helpMenu? "help" : gameState.modalState];
  useKeyboardControls([{
    codes: ["Escape"],
    callback: () => {
      if (helpMenu) {
        toggleHelp();
      } else {
        togglePause()
      }
    }
  }]);

  function toggleHelp() {
    setHelpMenu(prev => !prev);
  }


  return createPortal(
    (
      <>
        {Component &&
          <div className="modal">
            <div className="modal-panel-white-border">
              <div className="modal-panel-gray-border">
                <div className="modal-panel">
                  <Component
                    startGame={startGame}
                    toggleHelp={toggleHelp}
                    togglePause={togglePause}
                  />
                </div>
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
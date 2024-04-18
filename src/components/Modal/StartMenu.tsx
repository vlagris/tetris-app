import tetrisLogo from "@assets/tetris-thumbnail.png";
import Button from "@components/Modal/Button.tsx";
import {ModalMenuProps} from "@components/Modal/modal.tsx";

function StartMenu({startGame}: ModalMenuProps) {
  return (
    <>
      <img className="logo" src={tetrisLogo} alt=""/>
      <div className="modal-item">
        <Button
          className="btn-large btn-green"
          onClick={startGame}
        >play</Button>
      </div>
      <div className="modal-item">
        <Button className="btn btn-gray">help</Button>
      </div>
    </>
  );
}

export default StartMenu;
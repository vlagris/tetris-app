import Button from "@components/Modal/Button.tsx";
import {ModalMenuProps} from "@components/Modal/modal.tsx";

function PauseMenu({offPause}: ModalMenuProps) {

  return (
    <>
      <h4 className="modal-title">PAUSED</h4>
      <div className="modal-item">
        <Button className="btn btn-green" onClick={offPause}>continue</Button>
      </div>
      <div className="modal-item">
        <Button className="btn btn-gray">help</Button>
      </div>
    </>
  );
}

export default PauseMenu;
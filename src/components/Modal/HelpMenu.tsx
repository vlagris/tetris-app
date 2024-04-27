import {ModalMenuProps} from "@components/Modal/modal.tsx";
import Button from "@components/Modal/Button.tsx";


const ControlKeysArray = [
  {title: "A:", value: "Move left" },
  {title: "D:", value: "Move right" },
  {title: "W:", value: "Rotate" },
  {title: "S:", value: "Soft drop" },
  {title: "Left arrow:", value: "Move left" },
  {title: "Right arrow:", value: "Move right" },
  {title: "Up arrow:", value: "Rotate" },
  {title: "Down arrow:", value: "Soft drop" },
  {title: "Space:", value: "Hard drop" },
  {title: "Esc:", value: "Pause" },
]

function HelpMenu({toggleHelp}: ModalMenuProps) {


  return (
    <>
      <h4 className="modal-title">Control keys</h4>

      <ul className="modal-help-list">
        {ControlKeysArray.map((item, index) => (
          <li key={index} className="modal-help-item">
            <p className="modal-help-item_title">{item.title}</p>
            <p className="modal-help-item_text">{item.value}</p>
          </li>
        ))}
      </ul>


      <Button className="btn btn-gray" onClick={toggleHelp}>
        close
      </Button>
    </>
  );
}

export default HelpMenu;
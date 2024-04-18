
function PauseButton({onClick}: {onClick: () => void}) {
  return (
    <div className="pause-btn_wrap">
      <div className="btn-wrap" >
        <button className="btn-gray pause-btn" onClick={onClick}>
          <div className="pause-btn-bar"/>
          <div className="pause-btn-bar"/>
        </button>
      </div>
    </div>
)
  ;
}

export default PauseButton;
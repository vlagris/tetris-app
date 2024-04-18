import arrowRight from "@/assets/arrow-right.svg";

function HelpBar() {

  return (
    <div className="sidebar help-bar">
      <div className="help-bar-controls help-bar-item">
        <div className="help-bar-controls_top">
          <img src={arrowRight} alt=""/>
        </div>
        <div className="help-bar-controls_left">
          <img src={arrowRight} alt=""/>
        </div>
        <div className="help-bar-controls_bottom">
          <img src={arrowRight} alt=""/>
        </div>
        <div className="help-bar-controls_right">
          <img src={arrowRight} alt=""/>
        </div>
      </div>

      <div className="help-bar-controls help-bar-item">
        <div className="help-bar-controls_top">
          W
        </div>
        <div className="help-bar-controls_left">
          A
        </div>
        <div className="help-bar-controls_bottom">
          S
        </div>
        <div className="help-bar-controls_right">
         D
        </div>
      </div>


      {/*<div className="help-bar-item">*/}
      {/*  <span className="help-bar-text">Left and A:</span>*/}
      {/*  <span className="help-bar-text">move left</span>*/}
      {/*</div>*/}

      {/*<div className="help-bar-item">*/}
      {/*  <span className="help-bar-text">Right and D:</span>*/}
      {/*  <span className="help-bar-text">move right</span>*/}
      {/*</div>*/}

      {/*<div className="help-bar-item">*/}
      {/*  <span className="help-bar-text">Up and W:</span>*/}
      {/*  <span className="help-bar-text">rotate</span>*/}
      {/*</div>*/}

      {/*<div className="help-bar-item">*/}
      {/*  <span className="help-bar-text">Down and S:</span>*/}
      {/*  <span className="help-bar-text">fall faster</span>*/}
      {/*</div>*/}
    </div>
  );
}

export default HelpBar;
import React from "react";

type ButtonProps = {
  children: React.ReactNode,
  className: string,
  onClick?: () => void,
}

function Button({className, children, onClick}: ButtonProps) {

  function handleClick() {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="btn-wrap">
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
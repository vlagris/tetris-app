import React from "react";

function Panel({children}: {children: React.ReactNode}) {

  return (
    <div className="panel">
      <div className="panel-inner">
        {children}
      </div>
    </div>
  );
}


export default Panel;
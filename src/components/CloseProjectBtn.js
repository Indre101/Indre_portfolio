import React from "react";

export default function CloseProjectBtn(props) {
  return (
    <div className="controlButtons">
      <button
        className="closeBtn"
        onClick={() => {
          props.toggleProjectPage();
        }}></button>
    </div>
  );
}

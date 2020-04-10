import React from "react";

export default function CloseProjectBtn(props) {
  return (
    <div className="controlButtons safari_only">
      <button
        className="closeBtn"
        onClick={() => {
          props.toggleProjectPage();
        }}></button>
    </div>
  );
}

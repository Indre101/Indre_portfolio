import React from "react";

const MenuButton = (props) => {
  const acitveClassMenuBtn = !props.isMenuOpen ? "unclicked" : "clicked";

  return (
    <div
      onClick={() => props.toggleMenu()}
      id="menuButton"
      className="menuBtnContainer">
      <div className={`dash ${acitveClassMenuBtn}`}></div>
      <div className={`dash ${acitveClassMenuBtn}`}></div>
      <div className={`dash ${acitveClassMenuBtn}`}></div>
    </div>
  );
};

export default MenuButton;

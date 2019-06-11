import React from "react";
import logo from "../img/allocine.svg";

function Header(props) {
  return (
    <header className="App-header">
      <img
        src={logo}
        alt="allocine logo"
        className="logo"
        onClick={() => props.onTabClick()}
      />
    </header>
  );
}

export default Header;

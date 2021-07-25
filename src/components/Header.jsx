import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header(props) {
  return (
    <div>
      <header>
        <h1>
          {props.onName}
          <HighlightIcon />
          Keeper
        </h1>
      </header>
    </div>
  );
}

export default Header;

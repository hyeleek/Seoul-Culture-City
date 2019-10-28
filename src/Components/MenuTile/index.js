import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import heart from "../../shared/Heart.svg";
import empty from "../../shared/Empty.svg";

const MenuTile = (props) => {
    return (
      <Link
        to={props.link}
        className={"tile"}
      >
        <p className={"tile-text"}>{props.name}</p>
        <img
          className={"heart"}
          src={props.pinned? heart:empty}
          alt = {props.name}
        />
      </Link>
  );
};

export default MenuTile;

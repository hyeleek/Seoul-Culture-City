import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import heart from "../../shared/Heart.svg";
import empty from "../../shared/Empty.svg";

class MenuTile extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { pinned, link, name } = this.props;
    return (
        <Link
          to={link}
          className={"tile"}
        >
          <p className={"tile-text"}>{name}</p>
          <img className={"heart"} src={pinned? heart:empty} />
        </Link>
  );
  };
};

export default MenuTile;

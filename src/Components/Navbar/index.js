import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import "./index.css";
import InfoList from "../../shared/infoList.js";

class Navbar extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { toggleNavigation, collapsed } = this.props;
    return (
      <div className={["nav-overlay", collapsed? "collapsed":null].join(" ")}>
        <div className={["nav-bar-container", collapsed? "collapsed":null].join(" ")}>
          <div className="closeButton">
            <p onClick={() => toggleNavigation()}> × </p>
          </div>
          <NavLink
            exact to="/"
            className="nav-text home"
            onClick={() => toggleNavigation()}
          >
            SEOUL
          </NavLink>

          { InfoList.map( (info, idx) => {
              return (
                <NavLink
                  to={`/Place/${info.id}`}
                  className="nav-text"
                  onClick={() => toggleNavigation()}
                >
                  {info.nav}
                </NavLink>
              );
          })}
        </div>
      </div>
  );
  };
};

export default Navbar;

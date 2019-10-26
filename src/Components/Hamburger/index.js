import React, {Component} from "react";
import  { Link } from "react-router-dom";
import './index.css';


class Hamburger extends Component {
  render() {
    const { toggleNavigation } = this.props;
    return (
      <div className="top-items">
        <div className="hamburger" onClick={() => toggleNavigation()}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link
          exact to="/"
          className="home-icon"
        >
          SEOUL
        </Link>
      </div>

  );
  }
}

export default Hamburger;

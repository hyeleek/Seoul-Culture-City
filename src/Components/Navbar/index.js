import React, {Component} from "react";
import  { NavLink } from "react-router-dom";
import "./index.css";
import InfoList from "../../shared/infoList.js";

class Navbar extends Component {

  constructor(props){
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const { toggleNavigation} = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      toggleNavigation();
    }
 }


  render() {
    const { toggleNavigation, collapsed } = this.props;
    return (
      <div className={["nav-overlay", collapsed? "collapsed":null].join(" ")}>
        <div ref={this.setWrapperRef} className={["nav-bar-container", collapsed? "collapsed":null].join(" ")}>
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
                  key={idx}
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

import React, {Component} from "react";
import './index.css';

class Hamburger extends Component {
  render() {
    const { toggleNavigation } = this.props;
    return (
      <div class="hamburger" onClick={() => toggleNavigation()}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
  );
  }
}

export default Hamburger;

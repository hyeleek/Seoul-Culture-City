import React, {Component} from "react";
import './index.css';

class ScrollToTop extends Component {
  handleScrollToStats = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }

  render() {
    return (
      <div
        className="top-button"
        onClick={() => this.handleScrollToStats()}
      >
        <p> top </p>
      </div>
    );
  }

};

export default ScrollToTop;

import React, {Component} from "react";
import { Link, NavLink } from "react-router-dom";

import './index.css';
import InfoList from "../../shared/infoList.js";
import MenuTile from "../../Components/MenuTile";
import Navbar from "../../Components/Navbar";

class Home extends Component {

  render() {
    return (
      <div className="homepage">
          <h2>SEOUL, <br/> THE CULTURE CITY</h2>
          <p>Seoul is a must-visit destination for art-lovers. Over the past two decades, Seoul has expanded as one of the biggest culture hub in Asia. Catering to a variety of genres and tastes, I would like to share my favorites art destinations.  </p>
          <div id="title-container">
            { InfoList.map( (info, idx) => {
                return (
                  <MenuTile
                    key={idx}
                    pinned={idx==0}
                    link={`/Place/${info.id}`}
                    name={info.nav} />
                );
            })}
          </div>
      </div>
    );
  }
}

export default Home;

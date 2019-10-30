import React  from "react";
import './index.css';
import InfoList from "../../shared/infoList.js";
import MenuTile from "../../Components/MenuTile";

const Home = (props) => {
  return (
    <div className="homepage">
        <h2>SEOUL, <br/> CULTURE CITY</h2>
        <p>Seoul is a must-visit destination for art-lovers. Over the past two decades, Seoul has expanded as one of the biggest culture hub in Asia. Catering to a variety of genres and tastes, I would like to share my favorites art destinations.  </p>
        <div id="title-container">
          { InfoList.map( (info, idx) => {
              return (
                <MenuTile
                  key={idx}
                  pinned={props.getPinnedPlace(info.id)}
                  link={`/Place/${info.id}`}
                  name={info.nav}
                  setPinnedPlace={props.setPinnedPlace}
                />
              );
          })}
        </div>
    </div>
  );
}

export default Home;

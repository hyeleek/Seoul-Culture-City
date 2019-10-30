import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Map from "../../Components/Map";
import InfoList from "../../shared/infoList.js";

import './index.css';

import left from "../../shared/left.svg";
import right from "../../shared/right.svg";
import heart from "../../shared/Heart.svg";
import empty from "../../shared/Empty.svg";

const mod = (x, n) => (x % n + n) % n

const Place = (props) => {

  const { id } = useParams();
  const place = InfoList.filter(info => info.id === id)[0];
  const currentIndex  = InfoList.indexOf(place);
  const { name, wallpaper, homepage, address, longtitude, latitude, description } = place;

  return (
    <div className="detail-page">
      <img className={"wallpaper"} src={wallpaper} alt={name}/>
      <div className="header">
          <Link
            to={`/Place/${InfoList[mod(currentIndex-1, InfoList.length)].id}`}
            className="arrow-container"
          >
            <img src={left} alt={"left"}/>
          </Link>
          <h2>{`${name}`}</h2>
          <Link
            to={`/Place/${InfoList[mod(currentIndex+1, InfoList.length)].id}`}
            className="arrow-container"
          >
              <img src={right} alt={"right"}/>
          </Link>
          <img
            className = {"pin"}
            src = {props.getPinnedPlace(id)? heart: empty}
            onClick={() => props.setPinnedPlace(id)}
            alt={name}
            onMouseOver={e => (e.currentTarget.src = heart)}
            onMouseOut={e => (e.currentTarget.src = props.getPinnedPlace(id)? heart: empty)}
          />
      </div>
      <div className="body">
        <div className="detail">
          <p className="title">{`Homepage : `}</p>
          <a target="_blank" href={homepage} rel="noopener noreferrer">{homepage}</a>
        </div>
        <div className="detail">
          <p className="title">{`Address : `}</p>
        <p>{`${ address}`}</p>
        </div>
        <div className="map-container">
          <Map longtitude={longtitude} latitude={latitude} key={id}/>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Place;

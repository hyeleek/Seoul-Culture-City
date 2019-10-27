import React, {Component} from "react";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Footer from "../../Components/Footer";
import Map from "../../Components/Map";
import InfoList from "../../shared/infoList.js";

import './index.css';

import left from "../../shared/left.svg";
import right from "../../shared/right.svg";
import heart from "../../shared/Heart.svg";
import empty from "../../shared/Empty.svg";

const mod = (x, n) => (x % n + n) % n

function refreshPage(){
    window.location.reload();
}

const Place = (props) => {
  const { id } = useParams();
  const place = InfoList.filter(info => info.id === id)[0];
  const currentIndex  = InfoList.indexOf(place);
  const { name, wallpaper, photos, homepage, address, longtitude, latitude, description } = place;
  return (
    <div className="detail-page">
      <img className={"wallpaper"} src={wallpaper} />
      <div className="header">
          <Link
            to={`/Place/${InfoList[mod(currentIndex-1, InfoList.length)].id}`}
            className="arrow-container"
          >
            <img src={left}/>
          </Link>
          <h2>{`${name}`}</h2>
          <Link
            to={`/Place/${InfoList[mod(currentIndex+1, InfoList.length)].id}`}
            className="arrow-container"
          >
              <img src={right}/>
          </Link>
          <img className={"pin"} src={props.pinned? heart: empty} />
      </div>
      <div className="body">
        <div className="detail">
          <p className="title">{`Homepage : `}</p>
          <a target="_blank" href={homepage} >{homepage}</a>
        </div>
        <div className="detail">
          <p className="title">{`Address : `}</p>
        <p>{`${ address}`}</p>
        </div>
        <div className="map-container">
          <Map longtitude={longtitude} latitude={latitude} key={id}/>
        </div>
      </div>
    </div>
  );
};

export default Place;

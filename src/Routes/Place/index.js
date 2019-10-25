import React, {Component} from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import './index.css';
import InfoList from "../../shared/infoList.js";

const Place = () => {
  const { id } = useParams();
  const place = InfoList.filter(info => info.id === id)[0];
  const { name, wallpaper, photos, homepage, address, description } = place;
  return (
    <div>
      <p>{`${name}`}</p>
    </div>
  );
};

export default Place;

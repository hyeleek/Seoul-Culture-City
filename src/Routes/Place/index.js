import React, {Component} from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{`Place ${id}`}</p>
    </div>
  );
};

export default Place;

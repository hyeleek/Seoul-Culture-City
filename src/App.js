import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import './App.css';

/*=====================
Routes
=====================*/
import Home from "./Routes/Home";
import Place from "./Routes/Place";

function App() {
  return (
    <HashRouter>
  <header>
      <NavLink exact to="/" className="nav-text home">
        Home
      </NavLink>
      <NavLink exact to="/Place" className="nav-text home">
        Place
      </NavLink>
  </header>
  <div className="content">
    <Route exact path="/" component={Home}/>
    <Route path="/Place" component={Place}/>
  </div>
</HashRouter>
  );
}

export default App;

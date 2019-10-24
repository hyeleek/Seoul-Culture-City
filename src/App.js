import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import './App.css';

/*=====================
Routes
=====================*/
import Home from "./Routes/Home";
import Place from "./Routes/Place";

const id1 = "Sema";
const id2 = "MMCA";

function App() {
  return (
  <HashRouter>

    <header>
      <NavLink exact to="/" className="nav-text home">
        Home
      </NavLink>
      <NavLink to={`/Place/${id1}`}>
        SeMA
      </NavLink>
      <NavLink to={`/Place/${id2}`}>
        MMCA
      </NavLink>
    </header>

    <div className="content">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path={"/Place/:id"} >
        <Place/>
      </Route>
    </div>
  </HashRouter>
  );
}

export default App;

import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";

import './App.css';

/*=====================
Routes
=====================*/
import Home from "./Routes/Home";
import Place from "./Routes/Place";
/*=====================
Components
=====================*/
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";

class App extends Component {


  state = {
      collapsed : true
  }

  toggleNavigation = () => {
    this.setState({
      collapsed : !this.state.collapsed
    })
  }

  render() {
    const { collapsed } = this.state;
    return (
      <div className="container">
        { !collapsed &&
          <Navbar
          toggleNavigation={this.toggleNavigation}
          collapsed={collapsed}
          />
        }
        <div className="content">
          <Hamburger toggleNavigation={this.toggleNavigation} />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path={"/Place/:id"} >
            <Place/>
          </Route>
        </div>
      </div>
    );
  }

};

export default App;

import React, {Component} from "react";
import {Route, HashRouter} from "react-router-dom";

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
import InfoList from "./shared/infoList.js";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        collapsed : true,
        pinnedInfo : JSON.parse(window.localStorage.getItem("pinnedInformation"))
    }
  }

  componentDidMount(){
    this.setUpLocalStroage();
  }

  setUpLocalStroage = () => {
    const { pinnedInfo } = this.state;
    if ( pinnedInfo === null){
      var newInfo = {};
      InfoList.forEach(function(place) {
        newInfo[place.id] = false;
      });
      this.setState({
        pinnedInfo : newInfo
      })
      window.localStorage.setItem('pinnedInformation', JSON.stringify(newInfo));
    }
  }

  getPinnedPlace = (idx) => {
    const { pinnedInfo } = this.state;
    return pinnedInfo[idx];
  }

  setPinnedPlace = (idx) => {
    const { pinnedInfo } = this.state;
    pinnedInfo[idx] = !pinnedInfo[idx];
    this.setState({
      pinnedInfo : pinnedInfo
    })
    window.localStorage.setItem('pinnedInformation', JSON.stringify(pinnedInfo));
  }

  toggleNavigation = () => {
    this.setState({
      collapsed : !this.state.collapsed
    })
  }

  render() {
    const { collapsed, pinnedInfo} = this.state;
    return (
      <HashRouter className="container">
        { !collapsed &&
          <Navbar
          toggleNavigation={this.toggleNavigation}
          collapsed={collapsed}
          />
        }
        <div className="content">
          <Hamburger toggleNavigation={this.toggleNavigation} />
          <Route exact path="/">
            <Home
              pinnedInfo={pinnedInfo}
              getPinnedPlace={this.getPinnedPlace}
            />
          </Route>
          <Route exact path={"/Place/:id"} >
            <Place
              pinnedInfo = {pinnedInfo}
              getPinnedPlace={this.getPinnedPlace}
              setPinnedPlace = {this.setPinnedPlace}
            />
          </Route>
        </div>
      </HashRouter>
    );
  }

};

export default App;

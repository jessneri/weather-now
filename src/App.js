import React, { Component } from "react";
import Axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    coords: {
      latitude: 0,
      longitude: 0,
    },
  };

  //will run whenever refresh the browser
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoods = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoods });

        //api
        Axios.get(
          `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=VS6d3fGNOAKH2OeE0Grp2zi5kBTgIymP&q=
          ${this.state.coords.latitude}%2C${this.state.coords.longitude}`
        ).then(data => {
          const res = data.data.Key
          return res
        }).then(res => {
          Axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${res}?apikey=VS6d3fGNOAKH2OeE0Grp2zi5kBTgIymP`
          ).then(res => {
            console.log(res)
          })
        })
      });
    }
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;

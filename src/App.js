import React, { Component } from "react";
import Axios from "axios";
import "./App.css";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    coords: {
      latitude: 0,
      longitude: 0,
    },
    data: {},
    date: 0,
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
          `https://api.weatherapi.com/v1/current.json?key=7cc511b452fa472fa9f190226210801&q=${this.state.coords.latitude},${this.state.coords.longitude}`
          ).then(res => {
          
            let weatherData = {
              name: res.data.location.name,
              country: res.data.location.country,
              description: res.data.current.condition.text,
              icon: res.data.current.condition.icon,
              temperature: res.data.current.temp_c,
              pressure_mb: res.data.current.pressure_mb,
              uv: res.data.current.uv,
              humidity: res.data.current.humidity,
              wind: res.data.current.wind_kph

            }
          this.setState({data: weatherData})

        })

        const today = new Date(),
        showDate = (today.getMonth() + 1) + ' / ' + today.getDate() + ' / ' + today.getFullYear();
        this.setState({date: showDate})

      });
    }else{
      console.log("Not Supported")
    }
  }

  render() {
    return <div className="App">
      <Weather weatherData={this.state}/>
    </div>;
  }
}

export default App;

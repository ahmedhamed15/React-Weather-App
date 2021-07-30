import WeatherView from './components/weatherView';
import WeatherInfo from './components/weatherInfo';
import React, { Component } from 'react';

class App extends Component {

  state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    desc: '',
    data: [],
    cities: [],
    IsCountrySelected: false,
    IsCitySelected: false
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <WeatherView />
            <WeatherInfo />
        </div>
      </div>
    );
  }
}

export default App;

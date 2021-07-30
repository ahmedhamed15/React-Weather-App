import WeatherView from './components/weatherView';
import WeatherInfo from './components/weatherInfo';
import React, { Component } from 'react';

class App extends Component {
  return (
    <div className="App">
      <div className="container">
          <WeatherView />
          <WeatherInfo />
      </div>
    </div>
  );
}

export default App;

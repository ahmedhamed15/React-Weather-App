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
    error: '',
    popupState: false
  }

  // Change popup state
  changePopUpState = () => {
      setState({
        popupState: !this.popupState
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <WeatherView />
            <WeatherInfo changePopUpState={this.changePopUpState} />
        </div>
      </div>
    );
  }
}

export default App;

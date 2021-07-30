import WeatherView from './components/weatherView';
import WeatherInfo from './components/weatherInfo';
import React, { useContext } from 'react';
import {FormState} from './context/FormContext';

const App = () => {

  const []


  return (
    <div className="App">
      <div className="container">
        <FormState>
          <WeatherView />
          <WeatherInfo />
        </FormState>
      </div>
    </div>
  );
}

export default App;

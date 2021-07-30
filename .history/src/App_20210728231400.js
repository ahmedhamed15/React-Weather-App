import WeatherView from './components/weatherView';
import WeatherInfo from './components/weatherInfo';

function App() {
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

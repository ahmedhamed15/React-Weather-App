import WeatherView from './components/weatherView';
import weatherInfo from './components/weatherInfo';

function App() {
  return (
    <div className="App">
      <div className="container">
          <WeatherView />
          <weatherInfo />
      </div>
    </div>
  );
}

export default App;

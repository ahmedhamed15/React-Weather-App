
function App() {
  return (
    <div className="App">
      <div className="container">
          <div class="weather-side">
            <div class="weather-gradient"></div>
            <div class="date-container">
              <h2 class="date-dayname">Tuesday</h2><span class="date-day">15 Jan 2019</span><i class="location-icon" data-feather="map-pin"></i><span class="location">Paris, FR</span>
            </div>
            <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
              <h1 class="weather-temp">29°C</h1>
              <h3 class="weather-desc">Sunny</h3>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

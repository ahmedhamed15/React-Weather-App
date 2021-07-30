import "./style.scss";

const index = () => {
    return (
        <div class="weather-side">
            <div class="weather-gradient"></div>
            <div class="date-container">
              <h2 class="date-dayname">Tuesday</h2><span class="date-day">15 Jan 2019</span><i class="location-icon" dataFeather="map-pin"></i><span class="location">Paris, FR</span>
            </div>
            <div class="weather-container"><i class="weather-icon" dataFeather="sun"></i>
              <h1 class="weather-temp">29°C</h1>
              <h3 class="weather-desc">Sunny</h3>
            </div>
        </div>
    )
}

export default index

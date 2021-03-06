import "./style.scss";

const index = () => {
    return (
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
              <h2 className="date-dayname">Tuesday</h2><span className="date-day">15 Jan 2019</span><i className="location-icon"></i><span className="location">Paris, FR</span>
            </div>
            <div className="weather-container"><i className="weather-icon"></i>
              <h1 className="weather-temp">29°C</h1>
              <h3 className="weather-desc">Sunny</h3>
            </div>
        </div>
    )
}

export default index

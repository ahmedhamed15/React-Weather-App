import "./style.scss";

const index = (props) => {
    return (
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
              <h2 className="date-dayname">Tuesday</h2><span className="date-day">15 Jan 2019</span><i className="location-icon"></i><span className="location">{props.city}, {props.country}</span>
            </div>
            <div className="weather-container"><i className="weather-icon"></i>
              <h1 className="weather-temp">{props.temp}°C</h1>
              <h3 className="weather-desc">{props.desc}</h3>
            </div>
        </div>
    )
}

export default index

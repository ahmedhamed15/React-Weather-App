import React, { useState } from "react";
import "./style.scss";

const index = (props) => {

  // Start :: Date
  function join(t, a, s) {
      function format(m) {
        let f = new Intl.DateTimeFormat('en', m);
        return f.format(t);
      }
      return a.map(format).join(s);
  }
  
  let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
  let curDate = new Date;
  let finalDate = join(curDate, a, ' ');
  let curDay = curDate.getDay();
  
  // Get Day
  const [curDayAsString, setCurDayAsString] = useState('') 

  switch (curDay) {
    case 0:
      return curDayAsString = "Monday";
    case 1:
      return curDayAsString = "Monday";
    default:
      return curDayAsString = "---"
  }

 // END :: Date

  return (
      <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{curDay}</h2><span className="date-day">{ finalDate }</span><i className="location-icon"></i><span className="location">{props.city}, {props.country}</span>
          </div>
          <div className="weather-container"><i className="weather-icon"></i>
            <h1 className="weather-temp">{props.temp}°C</h1>
            <h3 className="weather-desc">{props.desc}</h3>
          </div>
      </div>
  )
}

export default index

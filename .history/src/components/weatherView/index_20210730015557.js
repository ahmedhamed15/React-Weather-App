import React, { useState, useEffect } from "react";
import "./style.scss";

const Index = (props) => {

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

  useEffect(() => {
    switch (curDay) {
      case 0:
        return setCurDayAsString("Monday");
      case 1:
        return setCurDayAsString("Sunday");
      case 2:
        return setCurDayAsString("Tuesday");
      case 3:
        return setCurDayAsString("Wednesday");
      case 4:
        return setCurDayAsString("Thursday");
      case 5:
        return setCurDayAsString("Friday");
      case 6:
        return setCurDayAsString("Saturday");
      default:
        return setCurDayAsString("---");
    }
  }, [])

 // END :: Date

  return (
      <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{curDayAsString}</h2><span className="date-day">{ finalDate }</span><i className="location-icon"></i><span className="location">{props.city}, {props.country}</span>
          </div>
          <div className="weather-container"><i className="weather-icon"></i>
            <h1 className="weather-temp">{props.temp}°C</h1>
            <h3 className="weather-desc">{props.desc}</h3>
          </div>
      </div>
  )
}

export default Index

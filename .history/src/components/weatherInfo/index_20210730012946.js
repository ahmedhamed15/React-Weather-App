import React, { useState } from 'react';
import Form from '../Form';
import './style.scss';
const Index = (props) => {

    const [popupState, setPopupState] = useState(false);

    // Change popup state
    const changePopUpState = () => {
        setPopupState(!popupState);
    }

    return (
        <div className="info-side">
            <div className="today-info-container">
                <div className="today-info">
                    <div className="precipitation"> <span className="title">PRESSURE</span><span className="value">{props.pressure}</span>
                        <div className="clear"></div>
                    </div>
                    <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{props.humidity} %</span>
                        <div className="clear"></div>
                    </div>
                    <div className="wind"> <span className="title">WIND</span><span className="value">{props.wind} km/h</span>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            <div className="week-container">
                <ul className="week-list">
                    <li className="active"><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                    <li><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
                    <li><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
                    <li><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
                    <div className="clear"></div>
                </ul>
            </div>
            <div className="location-container">
                <button className="location-button" onClick={changePopUpState}><span>Change location</span></button>
            </div>

            {/* POPUP FORM */}
            <Form 
                popupState={popupState} 
                changePopUpState={changePopUpState} 
                submitHandle={props.submitHandle}
                checkCityIsSelected={props.checkCityIsSelected}
                changeCity={props.changeCity}
                temp={props.temp}
                city={props.city}
                country={props.country}
                humidity={props.humidity}
                desc={props.desc}
                data={props.data}
                cities={props.cities}
                IsCountrySelected={props.IsCountrySelected}
                IsCitySelected={props.IsCitySelected}
            />

        </div>
    )
}

export default Index

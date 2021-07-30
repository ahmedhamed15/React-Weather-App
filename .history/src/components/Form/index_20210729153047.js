import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
const Index = ({ changePopUpState, popupState }) => {

    // Get Countries and Cities
    let countries;
    const getCountriesAndCities = async () => {
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        // const setData = await setInfo(data.data);
        // const allData = [data.data[0], data.data[1], data.data[2]]
        console.log(data.data)
    }
    getCountriesAndCities()
    return (
        <div className={ !popupState ? 'hidden' : 'form-popup' } >
            <span onClick={changePopUpState}> &times; </span>
            <form>
                <div className="form-group countries-group">
                    <label> Select the country... </label>
                    <select name="city">
                        {/* { getCountriesAndCities.map( el => <option value="cairo"> {el.country} </option> ) } */}
                    </select>
                </div>
                <div className="form-group cities-group">
                    <label> Select the city... </label>
                    <select name="country">
                        <option value="eg"> Egypt </option>
                        <option value="jor"> Jordan </option>
                        <option value="usa"> America </option>
                    </select>
                </div>
                <div className="form-group submit-group">
                    <button type="submit"> Get Weather </button>
                </div>
            </form>
        </div>
    )
}

export default Index

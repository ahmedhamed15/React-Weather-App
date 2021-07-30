import React, { useState } from 'react';
import './style.scss';
const Index = ({ changePopUpState, popupState }) => {

    // Get Countries and Cities
    const getCountriesAndCities = async () => {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const data = response.json();  
        console.log(data);
    }
    getCountriesAndCities()

    return (
        <div className={ !popupState ? 'hidden' : 'form-popup' } >
            <span onClick={changePopUpState}> &times; </span>
            <form>
                <div className="form-group countries-group">
                    <label> Select the country... </label>
                    <select name="city">
                        <option value="cairo"> Cairo </option>
                        <option value="mansoura"> Mansoura </option>
                        <option value="minia"> Minia </option>
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

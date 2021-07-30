import React, { useState, useContext } from 'react';
import axios from 'axios';
import FormContext from '../../context/FormContext';
import './style.scss';

const Index = () => {

    const {submitHandle, changeCity, data, cities, checkCityIsSelected, IsCountrySelected, IsCitySelected } = useContext(FormContext);
    
    return (
        <div className={ !this.props.popupState ? 'hidden' : 'form-popup' } >
            <span onClick={this.props.changePopUpState}> &times; </span>
            <form onSubmit={submitHandle}>
                <div className="form-group countries-group">
                    <label> Select the country... </label>
                    <select name="country" onChange={changeCity}>
                        <option value="no-country"> Please choose a country... </option>
                        { data.map( (el, ix) => <option key={ix} value={el.country}> {el.country} </option> ) }
                    </select>
                </div>
                { IsCountrySelected && (
                    <div className="form-group cities-group">
                        <label> Select the city... </label>
                        <select name="city" onChange={checkCityIsSelected}>
                            <option value="no-city"> Please choose a city... </option>
                            { cities.map( (el, ix) => <option key={ix} value={el}> {el} </option> ) }
                        </select>
                    </div>
                ) }
                { IsCitySelected && (
                    <div className="form-group submit-group">
                        <button type="submit"> Get Weather </button>
                    </div>
                ) }
            </form>
        </div>
    )
}

export default Index

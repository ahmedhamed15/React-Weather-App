import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import { ConsoleWriter } from 'istanbul-lib-report';
const Index = (props) => {

    
    render() {
        return (
            <div className={ !props.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={props.changePopUpState}> &times; </span>
                <form onSubmit={this.submitHandle}>
                    <div className="form-group countries-group">
                        <label> Select the country... </label>
                        <select name="country" onChange={this.changeCity}>
                            <option value="no-country"> Please choose a country... </option>
                            { props.data.map( (el, ix) => <option key={ix} value={el.country}> {el.country} </option> ) }
                        </select>
                    </div>
                    { props.IsCountrySelected && (
                        <div className="form-group cities-group">
                            <label> Select the city... </label>
                            <select name="city" onChange={this.checkCityIsSelected}>
                                <option value="no-city"> Please choose a city... </option>
                                { props.cities.map( (el, ix) => <option key={ix} value={el}> {el} </option> ) }
                            </select>
                        </div>
                    ) }
                    { props.IsCitySelected && props.IsCitySelected && (
                        <div className="form-group submit-group">
                            <button type="submit"> Get Weather </button>
                        </div>
                    ) }
                </form>
            </div>
        )
    }
}

export default Index

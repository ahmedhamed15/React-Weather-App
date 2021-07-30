import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
import { ConsoleWriter } from 'istanbul-lib-report';
class Index extends React.Component {

    
    render() {
        return (
            <div className={ !this.props.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={this.props.changePopUpState}> &times; </span>
                <form onSubmit={this.submitHandle}>
                    <div className="form-group countries-group">
                        <label> Select the country... </label>
                        <select name="country" onChange={this.changeCity}>
                            <option value="no-country"> Please choose a country... </option>
                            { this.state.data.map( (el, ix) => <option key={ix} value={el.country}> {el.country} </option> ) }
                        </select>
                    </div>
                    { this.state.IsCountrySelected && (
                        <div className="form-group cities-group">
                            <label> Select the city... </label>
                            <select name="city" onChange={this.checkCityIsSelected}>
                                <option value="no-city"> Please choose a city... </option>
                                { this.state.cities.map( (el, ix) => <option key={ix} value={el}> {el} </option> ) }
                            </select>
                        </div>
                    ) }
                    { this.state.IsCitySelected && this.state.IsCitySelected && (
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

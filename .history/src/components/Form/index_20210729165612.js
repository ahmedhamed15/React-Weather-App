import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
class Index extends React.Component {

    // Get Countries and Cities
    state = {
        data: [],
        cities: [],
        IsCountrySelected: false,
        IsCitySelected: false
    }
    async componentDidMount() {
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        this.setState({
            data: data.data
        });
    }
    changeCity = (e) => {
        if (e.target.value !== "no-country") {
            const curData = [...this.state.data],
                  { cities } = curData.find( el => el.country === e.target.value);
            this.setState({
                cities,
                IsCountrySelected: true
            });
        } else {
            this.setState({
                cities: [],
                IsCountrySelected: false
            });
        }
    }
    checkCityIsSelected = (e) => {
        if (e.target.value !== "no-city") {
            this.setState({
                IsCitySelected: true
            });
        } else {
            this.setState({
                IsCitySelected: false
            });
        }
    }
    submitHandle = (e) {

    }
    render() {
        return (
            <div className={ !this.props.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={this.props.changePopUpState}> &times; </span>
                <form onSubmit={submitHandle}>
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
                    { this.state.IsCitySelected && (
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

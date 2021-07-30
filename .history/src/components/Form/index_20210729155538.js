import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
class Index extends React.Component {

    // Get Countries and Cities
    state = {
        data: [],
        isLoading: false
    }

    getCountriesAndCities = async () => {
        this.state.isLoading = true;
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        this.setState({
            data: data.data
        });
    }
    render() {
        this.getCountriesAndCities();
        return (
            <div className={ !this.props.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={this.props.changePopUpState}> &times; </span>
                <form>
                    <div className="form-group countries-group">
                        <label> Select the country... </label>
                            
                        <select name="city">
                            <option value="no-country"> Please choose a country... </option>
                            { this.state.data.map( (el, ix) => <option key={ix}> {el.country} </option> ) }
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
}

export default Index

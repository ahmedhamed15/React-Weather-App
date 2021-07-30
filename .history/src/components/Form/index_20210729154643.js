import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
class Index extends React.Component {

    // Get Countries and Cities
    
    state = {
        data: []
    }

    getCountriesAndCities = async () => {
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        // const setData = await setInfo(data.data);
        // const allData = [data.data[0], data.data[1], data.data[2]]
        this.useState({
            data: data.data
        });
    }
    render() {
        return (
            <div className={ !this.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={this.changePopUpState}> &times; </span>
                <form>
                    <div className="form-group countries-group">
                        <label> Select the country... </label>
                            
                        <select name="city">
                            { [0, 1, 2, 3].map( (el, ix) => <option key={ix}> {el} </option> ) }
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

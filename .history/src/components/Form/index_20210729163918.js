import React, { useState } from 'react';
import axios from 'axios';
import './style.scss';
class Index extends React.Component {

    // Get Countries and Cities
    state = {
        data: [],
    }
    componentDidMount() {
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        this.setState({
            data: data.data
        });
    }
    changeCity = (e) => {
        console.log(e.target.value);
    }
    render() {
        return (
            <div className={ !this.props.popupState ? 'hidden' : 'form-popup' } >
                <span onClick={this.props.changePopUpState}> &times; </span>
                <form>
                    <div className="form-group countries-group">
                        <label> Select the country... </label>
                        <select name="country" onChange={this.changeCity}>
                            <option value="no-country"> Please choose a country... </option>
                            { this.state.data.map( (el, ix) => <option key={ix} value={el.country}> {el.country} </option> ) }
                        </select>
                    </div>
                    <div className="form-group cities-group">
                        <label> Select the city... </label>
                        <select name="city">
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
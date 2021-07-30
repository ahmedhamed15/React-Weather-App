import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
const FormContext = React.createContext();

const FormState = (props) => {
    const initialState = {
        temp: '',
        city: '',
        country: '',
        humidity: '',
        desc: '',
        data: [],
        cities: [],
        IsCountrySelected: false,
        IsCitySelected: false
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getAllCountries = async () => {
        const { data } = await axios('https://countriesnow.space/api/v0.1/countries');
        dispatch({ type: "ALL_COUNTRIES", payload: data.data });
    }

    useEffect(() => {
        getAllCountries()
    }, []);

    const changeCity = (e) => {
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
    const checkCityIsSelected = (e) => {
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
    const submitHandle = async (e) => {
        e.preventDefault();
        const { data } = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=e36ed364400282e43250b6c4c0274d44`);
        console.log(data);
    }

    return (
        <FormState.Provider value={{ submitHandle, checkCityIsSelected, changeCity, temp: this.state.temp, city: this.state.city,
            country: this.state.country, humidity: this.state.humidity, desc: this.state.desc, data: this.state.data, cities: this.state.cities,
            IsCountrySelected: this.state.IsCountrySelected, IsCitySelected: this.state.IsCitySelected }}>
            {props.children}
        </FormState.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING" :
            return {...state, isLoading: true};
        case "SEARCH_SHOWS" :
            return {...state, shows: action.payload, isLoading: false};
        case "SET_ACTIVE_SHOW" :
            return {...state, activeShow: action.payload ? action.payload : {}, isLoading: false};
        default:
            return state;
    }
}

export default {FormContext, FormState}
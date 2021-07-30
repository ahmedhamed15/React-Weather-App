import React, { useReducer } from 'react';

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
    return (
        <ShowsContext.Provider value={{  }}>
            {props.children}
        </ShowsContext.Provider>
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
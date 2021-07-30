import WeatherView from './components/weatherView';
import WeatherInfo from './components/weatherInfo';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    temp: '',
    city: '',
    country: '',
    humidity: '',
    desc: '',
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
  submitHandle = async (e) => {
      e.preventDefault();
      const { data } = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.city.value},${e.target.country.value}&appid=e36ed364400282e43250b6c4c0274d44`);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity
      })
      console.log(data);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
            <WeatherView />
            <WeatherInfo 
              submitHandle={this.submitHandle}
              checkCityIsSelected={this.checkCityIsSelected}
              changeCity={this.changeCity}
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              desc={this.state.desc}
              data={this.state.data}
              cities={this.state.cities}
              IsCountrySelected={this.state.IsCountrySelected}
              IsCitySelected={this.state.IsCitySelected}
            />
        </div>
      </div>
    );
  }
}

export default App;

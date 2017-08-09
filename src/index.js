import React, { Component } from 'react';
import '../node_modules/material-components-web/dist/material-components-web.min.css'
import App from './App';
import './index.css';

class App extends Component {
  state = {
    icon: '',
    time: 1,
    city: '',
    temperature: '',
    weatherCode: '',
    fetching: true
  }

  componentDidMount() {
    this.fetchIP();
  }

  fetchWeatherData = city => {
    const baseUrl = `http://api.openweathermap.org`;
    const path = `/data/2.5/weather`;
    const appId = `459fc1107972f9ca8e39abe5f2583722`;
    const query = `units=metric&lang=ru&appid=${appid}`;
  }
}
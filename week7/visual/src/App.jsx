import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import BarGraph from "./pages/bar";
import LinePlot from "./pages/line";
import Home from "./pages/home";
import PolarAreaChart from "./pages/polarchart";
import fetchWeatherData from './data/fetchData';

function App() {

const [data, setData] = useState(null);

useEffect(() => {
  const fetchDataAPI = async () => {
    const weatherData = await fetchWeatherData('Dhaka');
    if (weatherData) {
      const transformedData = {
        labels: ['Temperature', 'Humidity', 'Pressure'],
        datasets: [
          {
            label: 'Weather Data',
            backgroundColor: "rgb(55, 100, 132)",
            borderColor: "rgb(100, 299, 132)",
            data: [weatherData.main.temp, weatherData.main.humidity, weatherData.main.pressure],
            
          }
        ]
      };
      setData(transformedData);
    }
  };
  fetchDataAPI();
}, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/bar" element={ <BarGraph data={data}/> }></Route>
      <Route path="/line" element={ <LinePlot data={data}/> }></Route>
      <Route path="/polar" element={ <PolarAreaChart data={data}/> }></Route>
      <Route path="*" element={ <Error /> }></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

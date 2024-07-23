import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from './pages/home';
import Overview from "./pages/overview";
import Detail from "./pages/detail";
import Error from "./pages/error";
import Charts from "./pages/charts";
import BarChart from "./pages/bar";
import LineChart from "./pages/line";
import PolarChart from "./pages/polar";

function App() {

  const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';
                const response = await axios.get("coins/markets", {
                    params: {
                        vs_currency: "usd",
                        per_page: 12,
                        page: 1
                    }
                });
                setCryptoData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: cryptoData.map(coin => coin.name),
        datasets: [
            {
                label: 'Price in USD',
                data: cryptoData.map(coin => coin.current_price),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/overview" element={ <Overview /> }></Route>
        <Route path="/detail/:id" element={ <Detail /> }></Route>
        <Route path="/charts" element={ <Charts /> }></Route>
        <Route path="/charts/bar" element={ <BarChart data={data} /> }></Route>
        <Route path="/charts/line" element={ <LineChart data={data} /> }></Route>
        <Route path="/charts/polar" element={ <PolarChart data={data} /> }></Route>
        <Route path="*" element={ <Error /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//rafce to crate automatic
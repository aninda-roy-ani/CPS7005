import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import './overview.css';

function Overview() {
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

    return (
        <div>
            <Header />
            <div className="crypto-cards">
                {cryptoData.map((crypto) => (
                    <div key={crypto.id} className="crypto-card">
                        <h2>{crypto.name} ({crypto.symbol.toUpperCase()})</h2>
                        <h3>Current Price: ${crypto.current_price.toFixed(2)}</h3>
                        <h4>Market Cap: ${crypto.market_cap.toLocaleString()}</h4>
                        <h4>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</h4>
                        <Link to={`/detail/${crypto.id}`} className="btn-details">View Details</Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Overview;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import './detail.css'; 

function Detail() {
    const { id } = useParams();
    const [cryptoDetail, setCryptoDetail] = useState(null);

    useEffect(() => {
        const fetchCryptoDetail = async () => {
            try {
                axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';
                const response = await axios.get(`coins/${id}`, {
                    params: {
                        localization: false,
                        tickers: false,
                        market_data: true,
                        community_data: true,
                        developer_data: true
                    }
                });
                setCryptoDetail(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCryptoDetail();
    }, [id]);

    if (!cryptoDetail) {
        return (
            <div>
                <Header />
                <p>Loading...</p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="crypto-details">
                <h1>{cryptoDetail.name} ({cryptoDetail.symbol.toUpperCase()}) Details</h1>
                <h3>Current Price: ${cryptoDetail.market_data?.current_price?.usd}</h3>
                <h3>Market Cap: ${cryptoDetail.market_data?.market_cap?.usd.toLocaleString()}</h3>
                <h3>24h Change: {cryptoDetail.market_data?.price_change_percentage_24h?.toFixed(2)}%</h3>
                <div className="details-section">
                    <h2>Supply Information</h2>
                    <h5>Total Supply: {cryptoDetail.market_data?.total_supply?.toLocaleString()} {cryptoDetail.symbol.toUpperCase()}</h5>
                    <h5>Circulating Supply: {cryptoDetail.market_data?.circulating_supply?.toLocaleString()} {cryptoDetail.symbol.toUpperCase()}</h5>
                    <h5>Max Supply: {cryptoDetail.market_data?.max_supply ? `${cryptoDetail.market_data.max_supply.toLocaleString()} ${cryptoDetail.symbol.toUpperCase()}` : "No max supply"}</h5>
                </div>
                <div className="details-section">
                    <h2>Additional Information</h2>
                    <h5>Market Cap Rank: {cryptoDetail.market_cap_rank}</h5>
                    <h5>Total Markets: {cryptoDetail.markets?.length || 0}</h5>
                    <h5>All Time High: ${cryptoDetail.market_data?.ath?.usd}</h5>
                    <h5>All Time Low: ${cryptoDetail.market_data?.atl?.usd}</h5>
                </div>
                <div className="details-section">
                    <h2>Scores</h2>
                    <h5>Developer Score: {cryptoDetail.developer_score}</h5>
                    <h5>Community Score: {cryptoDetail.community_score}</h5>
                    <h5>Public Interest Score: {cryptoDetail.public_interest_score}</h5>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <h6>{cryptoDetail.description?.en || "No description available"}</h6>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;

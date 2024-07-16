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
                <p>Current Price: ${cryptoDetail.market_data?.current_price?.usd}</p>
                <p>Market Cap: ${cryptoDetail.market_data?.market_cap?.usd.toLocaleString()}</p>
                <p>24h Change: {cryptoDetail.market_data?.price_change_percentage_24h?.toFixed(2)}%</p>
                <div className="details-section">
                    <h2>Supply Information</h2>
                    <p>Total Supply: {cryptoDetail.market_data?.total_supply?.toLocaleString()} {cryptoDetail.symbol.toUpperCase()}</p>
                    <p>Circulating Supply: {cryptoDetail.market_data?.circulating_supply?.toLocaleString()} {cryptoDetail.symbol.toUpperCase()}</p>
                    <p>Max Supply: {cryptoDetail.market_data?.max_supply ? `${cryptoDetail.market_data.max_supply.toLocaleString()} ${cryptoDetail.symbol.toUpperCase()}` : "No max supply"}</p>
                </div>
                <div className="details-section">
                    <h2>Additional Information</h2>
                    <p>Market Cap Rank: {cryptoDetail.market_cap_rank}</p>
                    <p>Total Markets: {cryptoDetail.markets?.length || 0}</p>
                    <p>All Time High: ${cryptoDetail.market_data?.ath?.usd}</p>
                    <p>All Time Low: ${cryptoDetail.market_data?.atl?.usd}</p>
                </div>
                <div className="details-section">
                    <h2>Scores</h2>
                    <p>Developer Score: {cryptoDetail.developer_score}</p>
                    <p>Community Score: {cryptoDetail.community_score}</p>
                    <p>Public Interest Score: {cryptoDetail.public_interest_score}</p>
                </div>
                <div className="description">
                    <h2>Description</h2>
                    <p>{cryptoDetail.description?.en || "No description available"}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Detail;

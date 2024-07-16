import Footer from '../components/footer';
import Header from '../components/header';
import './overview.css'

const cryptoData = [
    { id: 1, name: 'Bitcoin (BTC)', price: '$40,000' },
    { id: 2, name: 'Ethereum (ETH)', price: '$3,000' },
    { id: 3, name: 'Tether (USDT)', price: '$1.00' },
    { id: 4, name: 'USD Coin (USDC)', price: '$1.00' },
    { id: 5, name: 'Binance Coin (BNB)', price: '$300' },
    { id: 6, name: 'XRP (XRP)', price: '$0.50' },
    { id: 7, name: 'Cardano (ADA)', price: '$1.00' },
    { id: 8, name: 'Solana (SOL)', price: '$50' },
    { id: 9, name: 'Polkadot (DOT)', price: '$10.00' },
    { id: 10, name: 'Dogecoin (DOGE)', price: '$0.10' },
  ];

function Overview() {
  return (
    <div>
      <Header />
      <div className='cards'>  
        {cryptoData.map((crypto) => (
          <div key={crypto.id} className='card'> 
            <h2>{crypto.name}</h2> 
            <h3>{crypto.price}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Overview;

import { useState, useEffect } from 'react';
import axios from 'axios';

const StockMarketFuc = ({ stock }) => {
    const [stockSymbol, setStockSymbol] = useState('APPLE');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [stockPrice, setStockPrice] = useState('');
    let interval;

    useEffect(() => {
        console.log('componentDidMount');
        interval = setInterval(() => {
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsetInterval');
            setStockSymbol('FaceBook');
        }, 1000);
        fetchStockPrice();
    }, []);
    useEffect(() => {
        console.log('shouldComponentUpdate stock: ', stock);
        setStockSymbol(stock);
        return () => {
            console.log('Unmounted')
            clearInterval(interval);
        }
    }, [stock]);

    const handleGetPrice = () => {
        fetchStockPrice();
    }
    const fetchStockPrice = async () => {
        console.log('fetchStockPrice: stock:: ', stock);
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/stocks/${stock}`);
            console.log('response: ', response);
            setLoading(false);
            setError(false);
            setStockPrice(response.data.price);
        } catch (error) {
            console.log("Error: ", error);
            setLoading(false);
            setError(false);
        }

    }
    return (
        <div className="stock-price-tracker">
            {loading && <div>loading...</div>}
            {error ? <div>Error in Loading data.</div> :
                <>
                    <h2>Stock Price Tracker</h2>
                    <h3>stockSymbol: {stockSymbol}</h3>
                    <button onClick={handleGetPrice}>get Price</button>
                    <h3>Stock Price: ${stockPrice}</h3>
                </>
            }
        </div>
    );
}

export default StockMarketFuc;
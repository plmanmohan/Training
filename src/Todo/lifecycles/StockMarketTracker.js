import React, { Component } from 'react';
import axios from 'axios';

class StockMarketTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockSymbol: 'APPLE',
            loading: false,
            error: false,
            stockPrice: 'No price'
        }
        // this.handleGetPrice = this.handleGetPrice.bind(this)
    }
    componentDidMount() {
        this.fetchStockPrice();
    }
    componentDidMount() {
        this.fetchStockPrice();
    }
    fetchStockPrice = async () => {
        const { stock } = this.props;
        console.log('fetchStockPrice: stock:: ', stock);
        this.setState({
            loading: true
        });
        try {
            const response = await axios.get(`http://localhost:5000/stocks/${stock}`);
            console.log('response: ', response);
            this.setState({
                loading: false,
                error: false,
                stockPrice: response.data.price
            });
        } catch (error) {
            console.log("Error: ", error);
            this.setState({
                loading: false,
                error: true,
            });
        }

    }
    handleGetPrice = () => {
        this.fetchStockPrice();
    }
    render() {
        const { stockSymbol, stockPrice, loading, error } = this.state;
        console.log('render: stockSymbol: ', stockSymbol);

        return (
            <div className="stock-price-tracker">
                {loading && <div>loading...</div>}
             {/*    {error ? <div>Error in Loading data.</div> :
                    <>
                        <h2>Stock Price Tracker</h2>
                        <h3>stockSymbol: {stockSymbol}</h3>
                        <button onClick={this.handleGetPrice}>get Price</button>
                        <h3>Stock Price: ${stockPrice}</h3>
                    </>
                } */}
                <>
                        <h2>Stock Price Tracker</h2>
                        <h3>stockSymbol: {stockSymbol}</h3>
                        <button onClick={this.handleGetPrice}>get Price</button>
                        <h3>Stock Price: ${stockPrice}</h3>
                    </>

            </div>
        );
    }
}

export default StockMarketTracker;

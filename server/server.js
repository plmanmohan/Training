const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());


const stockPrice = {
    APPLE: 100,
    GOOGLE: 200,
    FACEBOOK: 300,
    TCS: 500,
};

app.get('/stocks/:symbol', (req, res) => {
    console.log('Server get API is called');
    const symbol = req.params.symbol.toUpperCase();
    const price = stockPrice[symbol];
    if(price) {
        res.json({symbol, price});
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
import { setRef } from '@mui/material';
import './App.css';
import StockMarketTracker from './Todo/lifecycles/StockMarketTracker';
import { useState } from 'react';
import StockMarketFuc from './Todo/lifecycles/StockMarketFuc';
import FocusInput from './ref/FocusInput';
function App() {
  const [input, setInput] = useState('');
  const [stock, setStock] = useState('');
  const [flag, setFlag] = useState(true);

  const handleToggle = (e) => {
    setFlag(!flag);
  }
  const handleInputStock = (e) => {
    setInput(e.target.value);
  }
  const handleUpdate = () => {
    setStock(input);
  }
  return (
    <div className="parent">

      {/* <div className="input-container">
        <input
          type="text"
          placeholder='Enter Stock Symbol'
          value={input}
          onChange={handleInputStock}
        />
        <button onClick={handleUpdate}>Update Symbol</button>
      </div>
      <button onClick={handleToggle}>Toggle StockSymbol</button> */}
      {/* {flag && <StockMarketTracker stock={stock} />} */}
      {/* {flag && <StockMarketFuc stock={stock} />} */}
      <FocusInput />
    </div>
  );
}

export default App;

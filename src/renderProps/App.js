import './App.css';
import Child from './renderProps/Child';
import MouseTracker from './renderProps/MouseTracker';
function App() {
  
  return (
    <div className="parent">
      <MouseTracker render={
       ({x, y, input}) => <Child x={x} y={y} input={input}/>
      }/>
      
    </div>
  );
}

export default App;

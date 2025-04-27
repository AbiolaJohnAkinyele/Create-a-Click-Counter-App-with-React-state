import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1>Click Counter App</h1>
      <h2>{count}</h2>

      {count >= 10 && <p className="limit-message">You've reached the limit!</p>}

      <div className="button-group">
        <button className="btn increase" onClick={increase}>Increase</button>
        <button className="btn decrease" onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
}

export default App;

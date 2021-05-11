import './App.css';
import Home from './Home'
import NumberContext from "./NumberContext";
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [currNumber, setCurrNumber] = useState(42);
  const [category, setCategory] = useState(null);

  function updateCurrNumber(num) {
    setCurrNumber(() => num)
    //call API to get fact, set fact
  }

  return (
    <NumberContext.Provider value={{ currNumber, updateCurrNumber }}>
    <div className="App">   
      <Home />
    </div>
    </NumberContext.Provider>
  );
}

export default App;

import './App.css';
import NumberContext from "./NumberContext";
import { useEffect, useState } from 'react';
import Api from './Api'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const string = window.location.pathname.substr(6)
  const [numFact, setNumFact] = useState(null)
  const [currNumberString, setCurrNumberString] = useState(string || 42);
  // const [category, setCategory] = useState(null);
  

  useEffect(function updateString() {
    updateCurrNumberString(currNumberString);
  }, [])
  
  async function updateCurrNumberString(val, action=false) {
    if(currNumberString !== val) {
      setCurrNumberString(val);
    }
    if(action || !numFact) {
      let resp = await Api.getNumberFact(val);
      setNumFact(() => resp)
    }
  }

  return (
    <BrowserRouter>
      <NumberContext.Provider value={{ currNumberString, numFact, updateCurrNumberString }}>
        <div className="App">
          <Routes />
        </div>
      </NumberContext.Provider>
    </BrowserRouter>
  );
}

export default App;

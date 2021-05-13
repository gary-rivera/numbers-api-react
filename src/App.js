import './App.css';
import NumberContext from "./NumberContext";
import { useEffect, useState } from 'react';
import Api from './Api'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const string = window.location.pathname.substr(6);
  const [numFact, setNumFact] = useState({});
  const [currNumberString, setCurrNumberString] = useState(string || 42);
  

  useEffect(function updateString() {
    updateCurrNumberString(currNumberString, true);
  }, [])
  
  async function updateCurrNumberString(val, action=false) {
    if(currNumberString !== val) {
      setCurrNumberString(val);
    }
    if(action || !numFact) {
      let resp = await Api.getNumberFact(val);
      // console.log("RESP", resp)
      // console.log("VAL", val)
      setNumFact(() => resp)
    }
  }

  return (
    <BrowserRouter>
      <NumberContext.Provider value={{ currNumberString, numFact, setCurrNumberString, updateCurrNumberString }}>
        <div className="App">
          <Routes />
        </div>
      </NumberContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import NumberContext from "./NumberContext";
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Api from './Api'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [numFact, setNumFact] = useState("42 is the angle in degrees for which a rainbow appears or the critical angle.")
  const [currNumberString, setCurrNumberString] = useState("42");
  const [category, setCategory] = useState(null);

  async function updateCurrNumberString(val) {
    let resp = await Api.getNumberFact(val);
    setNumFact(() => resp)
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

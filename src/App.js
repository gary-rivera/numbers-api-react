import './App.css';
import Home from './Home'
import NumberContext from "./NumberContext";
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Api from './Api'


function App() {
  const [numFact, setNumFact] = useState("42 is the angle in degrees for which a rainbow appears or the critical angle.")
  const [currNumberString, setCurrNumberString] = useState("42");
  const [category, setCategory] = useState(null);

  async function updateCurrNumberString(val) {
    let resp = await Api.getNumberFact(val);
    setNumFact(() => resp)
  }

  return (
    <NumberContext.Provider value={{ currNumberString, numFact, setCurrNumberString, updateCurrNumberString }}>
    <div className="App">   
      <Home />
    </div>
    </NumberContext.Provider>
  );
}

export default App;

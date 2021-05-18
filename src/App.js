import './App.css';
import NumberContext from "./NumberContext";
import { useEffect, useState } from 'react';
import Api from './Api'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom';
import APIJson from './APIJson'
const stringLength = window.location.pathname.startsWith('/API') ? 5 : 6

function App() {
  const string = window.location.pathname.substr(stringLength);
  const [numFact, setNumFact] = useState({text: "", number: 42, type: "trivia"});
  const [currNumberString, setCurrNumberString] = useState(string || 42);
  const json = window.location.search.endsWith('?json') ? true : false;

  useEffect(function updateString() {
    updateCurrNumberString(currNumberString, true);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
      <NumberContext.Provider value={{ currNumberString, numFact, setCurrNumberString, updateCurrNumberString }}>
        <div className="App">
          {json ?
          <APIJson/>
          :
          <Routes />
          }
        </div>
      </NumberContext.Provider>
    </BrowserRouter>
  );
}
export default App;
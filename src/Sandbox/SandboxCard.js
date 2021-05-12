import './SanboxCard.css';
import Counter from './Counter';
import { useContext } from 'react';
import NumberContext from '../NumberContext';

function SandboxCard() {
  const {currNumberString, numFact, setCurrNumberString, updateCurrNumberString} = useContext(NumberContext);
  
  function handleChange(evt) {
    let value = evt.target.value;
    setCurrNumberString(() => value)
  }
  
  function handleEnter(evt) {
    if(evt.key === 'Enter') {
      updateCurrNumberString(currNumberString)
    }
  }

  return (
    <div className="outer-search">
      <div className="search-box">
        <div id="search-box">
          <label><a href="#" id="search-link">numbersapi.com/</a></label>
            <span><input id="search-text" type="text" value={currNumberString} onChange={handleChange} onKeyDown={handleEnter}/></span>
          </div>
          <div id="search-result" className="api-result">
            <span id="result-temporary-text">
            {numFact}
            </span>
          </div>
        <div/>
      </div>
    </div>
  )
}

export default SandboxCard;
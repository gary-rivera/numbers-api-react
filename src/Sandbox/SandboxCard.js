import './SanboxCard.css';
import Counter from './Counter';
import { useContext } from 'react';
import NumberContext from '../NumberContext';
import { Link } from 'react-router-dom';

function SandboxCard() {
  const {currNumberString, numFact, updateCurrNumberString, json} = useContext(NumberContext);

  function handleChange(evt) {
    const {value} = evt.target
    updateCurrNumberString(value)
  }
  
  function handleEnter(evt) {
    if(evt.key === 'Enter') {
      let value = evt.target.value
      updateCurrNumberString(value, true)
      window.history.replaceState({}, document.title, `/fact/${value}`)
    }
  }
  return (
    <div className="outer-search">
      <div className="search-box">
        <div id="search-box">
          <label>
            <Link to={`/API/${currNumberString}`}>numbersapi.com/</Link></label>
            <span>
              <input 
                id="search-text" 
                name="search"
                type="text" 
                value={currNumberString} 
                onChange={handleChange} 
                onKeyDown={handleEnter}
              />
            </span>
          </div>
          <div id="search-result" className="api-result">
            <div id="counter"><Counter /> </div>
            <span id="result-temporary-text">
            {json ? JSON.stringify(numFact) : numFact.text}
            </span>
          </div>
        <div/>
      </div>
    </div>
  )
}

export default SandboxCard;
import { useContext } from 'react';
import NumberContext from '../NumberContext';
import './RandomCard.css'

function RandomCard() {
  const {setCurrNumberString, updateCurrNumberString} = useContext(NumberContext)
  
  function handleClick(evt) {
    let value = evt.target.innerHTML;
    console.log(value)
    setCurrNumberString(() => value);
    updateCurrNumberString(value);
  }

  return (
    <div id="search-examples">
      <h3>Random</h3>
      <ul>
        <li><a href="#random/trivia" onClick={handleClick}>random/trivia</a></li>
        <li><a href="#random/year" onClick={handleClick}>random/year</a></li>
        <li><a href="#random/date" onClick={handleClick}>random/date</a></li>
        <li><a href="#random/math" onClick={handleClick}>random/math</a></li>
      </ul>
    </div>
  )
}

export default RandomCard;
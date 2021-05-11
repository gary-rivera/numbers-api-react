import './SanboxCard.css';
import Counter from './Counter';

function SandboxCard() {
  let fact = 'Please enable JavaScript to use this API browser.'

  return (
    <div className="outer-search">
      <div className="search-box">
        <div id="search-box">
          <label><a id="search-link">numbersapi.com/</a></label>
            <span><input id="search-text" type="text" /></span>
          </div>
          <div id="search-result" className="api-result">
            <div id="counter">
              <Counter />
            </div>
            <span id="result-temporary-text">
            {fact}
            </span>
          </div>
        <div/>
      </div>
    </div>
  )
}

export default SandboxCard;
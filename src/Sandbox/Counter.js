import './Counter.css'
import NumberContext from "../NumberContext"
import { useContext } from 'react';

function Counter() {
  const {currNumber, setCurrNumber} = useContext(NumberContext)

  function handleScroll(evt) {
    evt.preventDefault();
    console.log(evt);
    setCurrNumber((num) => num +=1);
  }

  function sayHi() {
    console.log('hi');
  }
  return (
    <div className="counter-container" 
      onWheel={handleScroll}>
      {/* // onClick={sayHi}> */}
        <div className="increment">▲</div>
        <div className="number"> {currNumber} </div>
        <div className="decrement">▼</div>
    </div>
  )
}

export default Counter;
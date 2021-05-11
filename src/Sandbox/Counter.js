import './Counter.css'
import NumberContext from "../NumberContext"
import { useContext } from 'react';

function Counter() {
  const {currNumber} = useContext(NumberContext)

  return (
    <div className="counter-container">
      <div className="increment">▲</div>
      <div className="number"> {currNumber} </div>
      <div className="decrement">▼</div>
    </div>
  )
}

export default Counter;
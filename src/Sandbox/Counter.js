import './Counter.css'
import NumberContext from "../NumberContext"
import { useContext, useState } from 'react';
const leapYear = 2020;

function Counter() {
  const { numFact, updateCurrNumberString, setCurrNumberString } = useContext(NumberContext)
  const [formValue, setFormValue] = useState(numFact.number)
  const category = numFact.type;

  function handleChange(evt) {
    const { value } = evt.target;  
    if(numFact.type === 'date') {
      let date = dateFromDay(leapYear, value);
      updateCurrNumberString(`${date}/${category}`, true)
    }
    else  {
      updateCurrNumberString(`${value}/${category}`, true)
    }
  }

  function dateFromDay(year, day){
    const date = new Date(year, 0); // initialize a date in `year-01-01`
    const finalDate = new Date(date.setDate(day)); // add the number of days
    const dayOfMonth = finalDate.getMonth() + 1;
    const month = finalDate.getDate();
    return `${dayOfMonth}/${month}`
  }

  return (
    <div className="counter-container" >
      <input 
        className="counter" 
        type="number" 
        min="-9999" 
        max="9999" 
        value={numFact.number}
        onChange={handleChange} 
      />
    </div>
  )
}

export default Counter;
import './APIResponse.css'
import { useContext } from 'react';
import NumberContext from './NumberContext';

function APIResponse() {
  const {numFact} = useContext(NumberContext);

  return (
    <div className="API">{numFact.text}</div>
  )
}

export default APIResponse;
import './APIResponse.css'
import { useContext } from 'react';
import NumberContext from './NumberContext';

function APIJson() {
  const {numFact} = useContext(NumberContext);
  return (
    <div className="API">{JSON.stringify(numFact)}</div>
  )
}

export default APIJson;
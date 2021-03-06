import './APIResponse.css'
import { useContext, useEffect } from 'react';
import NumberContext from './NumberContext';
import { useParams } from 'react-router-dom';

/**
* Using url parameter and json context as reference renders the numFact object or just text.
*
* Props: 
* - None
*
* Context:
* - json
* - numFact
* - updateCurrNumberString
*
* Router -> (APIResponse)
*/

function APIResponse() {
  const { parameter } = useParams();
  const {numFact, updateCurrNumberString, json} = useContext(NumberContext);
  
  useEffect(() => {
    updateCurrNumberString(parameter, true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="API">{json ? JSON.stringify(numFact) : numFact.text}</div>
  )
}

export default APIResponse;
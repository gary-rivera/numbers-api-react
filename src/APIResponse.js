import './APIResponse.css'
import { useContext, useEffect } from 'react';
import NumberContext from './NumberContext';
import { useParams } from 'react-router-dom';

function APIResponse() {
  const { parameter } = useParams();
  const {numFact, updateCurrNumberString, currNumberString} = useContext(NumberContext);
  
  useEffect(() => {
    updateCurrNumberString(parameter, true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function queryResp() {
    return window.location.href.endsWith('?json') ? JSON.stringify(numFact) : numFact.text;
    
  }

  return (
    <div className="API">{queryResp()}</div>
  )
}

export default APIResponse;
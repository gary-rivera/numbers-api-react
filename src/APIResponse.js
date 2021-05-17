import './APIResponse.css'
import { useContext, useEffect } from 'react';
import NumberContext from './NumberContext';
import { useParams } from 'react-router-dom';

function APIResponse() {
  const { parameter } = useParams();
  const {numFact, updateCurrNumberString} = useContext(NumberContext);
  
  useEffect(() => {
    updateCurrNumberString(parameter, true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="API">{numFact.text}</div>
  )
}

export default APIResponse;
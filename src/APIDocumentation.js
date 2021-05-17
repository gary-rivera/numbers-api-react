import ReactMarkdown from 'react-markdown';

function APIDocumentation() {
  const markdown = `
  Bring meaning to your metrics and stories to your dates with our API of interesting number facts.

  ## URL Structure

  Just hit <code>http://numbersapi.com/<strong>number</strong>/<strong>type</strong></code> to get a plain text response, where
  
`
  return (
    <div> 
      <ReactMarkdown children={markdown} />
    </div>
  )
}

export default APIDocumentation;
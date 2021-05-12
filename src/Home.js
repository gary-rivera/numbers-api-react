import './Home.css';
import CategoryContainer from './Category/CategoryContainer';
import SandboxContainer from './Sandbox/SandboxContainer';
import {useParams} from 'react-router-dom'

function Home() {

  const { string } = useParams()
  console.log("PARAM", string)

  return (
    <div className="body-container">
      <header>
        <h1 
          className="logo"> Numbers <span id="second-word">API</span>
        </h1>
        <h3 id="tagline"> 
          An API for interesting facts about numbers facts
        </h3>
      </header>
      <CategoryContainer />
      <SandboxContainer/>
    </div>
  )
}

export default Home;
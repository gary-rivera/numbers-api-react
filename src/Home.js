import './Home.css';
import CategoryContainer from './Category/CategoryContainer';
import SandboxContainer from './Sandbox/SandboxContainer';
import Footer from './Footer';
import APIDocumentation from './APIDocumentation';
import {useParams} from 'react-router-dom'

const PARAM_STARTING_INDEX = 6

function Home() {

  const pathname = window.location.pathname;
  // Removing the "/fact/" from the pathname
  const string = pathname.substr(PARAM_STARTING_INDEX)

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
      <Footer/>
      <APIDocumentation/>
    </div>
  )
}

export default Home;
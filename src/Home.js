import './Home.css';
import CategoryContainer from './CategoryContainer';

function Home() {
  return (
    <div>
      <header>
        <h1 
          className="logo"> Numbers <span id="second-word">API</span>
        </h1>
        <h3 id="tagline"> 
          An API for interesting facts about numbers facts
        </h3>
      </header>
      <CategoryContainer />
    </div>
  )
}

export default Home;
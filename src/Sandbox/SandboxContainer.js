import SandboxCard from './SandboxCard'
import RandomCard from './RandomCard'
import TryItOutArrow from './TryItOutArrow'
import './SandboxContainer.css'

function SandboxContainer() {

  return (
    <section id="sandbox-outer"> 
      <div id="sandbox">
        <TryItOutArrow />
        <SandboxCard/>
        <RandomCard/>
      </div>
    </section>
  )
}

export default SandboxContainer;
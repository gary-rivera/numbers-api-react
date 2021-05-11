import SandboxCard from './SandboxCard'
import RandomCard from './RandomCard'

function SandboxContainer() {

  return (
    <section id="sandbox-outer"> 
      <div id="sandbox">
        <div id="sandbox-text">Try it out!</div>
        <SandboxCard/>
        <RandomCard/>
      </div>
    </section>
  )
}

export default SandboxContainer;
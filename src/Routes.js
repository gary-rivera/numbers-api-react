import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home"


function Routes() {
  return (
    <div>
      <Switch>
        <Route path={`/fact:parameter`}><Home/></Route>
        <Route path='/'>
          <Redirect to='/fact42'/>
        </Route>
      </Switch>
    </div>
  )

}

export default Routes;
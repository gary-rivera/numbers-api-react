import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home"
import APIResponse from "./APIResponse"


function Routes() {
  return (
    <div>
      <Switch>
      <Route path={`/fact/:parameter`}><Home/></Route>
        <Route exact path={`/api/:parameter`}><APIResponse/></Route>
        {/* <Route exact path={`/api/:parameter`}><APIResponse/></Route> */}
        <Redirect to='/fact/42'/>
      </Switch>
    </div>
  )

}

export default Routes;
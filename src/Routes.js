import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home"


function Routes() {
  
  return (
    <div>
      <Switch>
        <Route path="/@:string"><Home/></Route>
      </Switch>
    </div>
  )

}

export default Routes;
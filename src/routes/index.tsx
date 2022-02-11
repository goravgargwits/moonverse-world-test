import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { UserType } from './constants'
import Route from './privateRoute'
import Home from 'pages/home'
const ReactRouter = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} type={UserType.PUBLIC} />
        </Switch>
      </Router>
    </div>
  )
}

export default ReactRouter

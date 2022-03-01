import React from 'react'
import { UserType } from './constants'
import { Route, Redirect, useHistory } from 'react-router-dom'
// to create custom routes
const Routers = ({ type, component: Component, ...rest }: any) => {
  const history = useHistory()
  const { push, goBack } = history
  const isLogin = true
  // const authenticated: any = history.location.state;
  const routeProps = {
    goToRoute: push,
    goBack,
  }
  switch (type) {
    case UserType.SECURED: {
      if (isLogin) {
        return (
          <Route
            {...rest}
            render={(props) => (
              <div>
                <Component {...props} {...routeProps} />
              </div>
            )}
          />
        )
      } else {
        return <Redirect to={'/home'} />
      }
    }

    case UserType.GUEST: {
      if (!isLogin) {
        return (
          <Route
            {...rest}
            render={(props) => (
              <div>
                <Component {...props} {...routeProps} />
              </div>
            )}
          />
        )
      } else {
        return <Redirect to={'/home'} />
      }
    }

    case UserType.PUBLIC: {
      if (isLogin) {
        return <Route {...rest} render={(props) => <Component {...props} {...routeProps} />} />
      } else {
        return <Route {...rest} render={(props) => <Component {...props} {...routeProps} />} />
      }
    }

    default: {
    }
  }

  return null
}

export default Routers

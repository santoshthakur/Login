import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import FormLogin from '../common/FormLogin'
function Router() {
    return (
 
        <div className="mt20">
          <div className="bgimage">
              <div className="wd df df-fn">
            <div className="frmwrap">
              <h1>Login Form</h1>
              <FormLogin/>
            </div>
              </div>
          </div>
        <Switch>
          <Route path="/" exact={true} Component={Home} />
          <Route path="" Component={Login} />
          <Route path="/login" Component={Contact} />
        </Switch>
        </div> 
    )
}

export default Router

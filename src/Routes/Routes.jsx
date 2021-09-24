import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Login } from './Login'
import {Navbar} from './Navbar'
import { UserPage } from './UserPage'
import { Users } from './Users'
import {PrivateRoute} from '../common/PrivateRoute'

//Client side rendering 

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                <Home />
                {/* <h3>Home</h3> */}
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <PrivateRoute path="/users" exact>
                    <Users />
                </PrivateRoute>

                <PrivateRoute path="/users/:userId">
                    <UserPage />
                </PrivateRoute>
                <Route path="/login">
                    <Login />
                </Route>
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        </div>
    )
}

//rafc <-
import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({redirectPath='/login',
push=false,
path,
children,
exact=false
}) => {
    const {isAuth} = React.useContext(AuthContext)

    return isAuth ? (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    ) : (
        <Redirect to={redirectPath} 
        push={push} />
    )
}

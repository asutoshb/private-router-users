import React from 'react';
import { Redirect } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext'

export const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const {handleSignin, isAuth} = React.useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignin({username, password})
    }

    return !isAuth ? (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" 
                value={username}
                onChange={e=>setUsername(e.target.value)} />
                <br />

                <input placeholder="password" 
                value={password} 
                type="password" 
                onChange={e=>setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    ) : (
        <Redirect to='/users' />
    )
}

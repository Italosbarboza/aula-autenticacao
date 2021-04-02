import React, {createContext, useCallback, useState} from 'react';

import api from '../../src/services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [data, setData] = useState(() => {
        const token = localStorage.getItem('Token');
        const user = localStorage.getItem('User');

        if(token && user) {
            return { token: token, user: JSON.parse(user)}
        }

        return {token: '', user: undefined}

    });

    function logout () {
        localStorage.removeItem('User');
        localStorage.removeItem('Token');
        setData({token: '', user: undefined});
    }
    
    const signIn = useCallback(({login, pswd}) => {
        api.post(`/user/sessions`, {login, pswd}).then(response => {

            const { token, user } = response.data;

            localStorage.setItem('User', JSON.stringify(response.data.user));
            localStorage.setItem('Token', response.data.token);

            setData({token, user});
        })
    }, []);
    
    return(
        <AuthContext.Provider value={{ signIn, user: data.user, token: data.token, signed: !data.user, logout }}>
            { children }
        </AuthContext.Provider>
    );
} 

export default AuthContext;
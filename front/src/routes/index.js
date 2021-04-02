import React, { useCallback, useContext } from 'react';

import authContext from '../context/auth';

import Login from './login';
import Dashboard from './dashboard';

export default function Routes() {
    
    const {signed} = useContext(authContext);
    
    return signed ? <Login/> : <Dashboard/>
}
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/login';

export default function LoginRouter() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
        </BrowserRouter>
    )
}
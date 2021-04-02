import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';

export default function DashboardRouter() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Dashboard}/>
        </BrowserRouter>
    )
}
import React, { useEffect, useContext, useState } from 'react';

import authContext from '../../context/auth';

import api from '../../../src/services/api'

export default function Dashboard() {
    
    const auth = useContext(authContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${auth.token}` }
        };
        api
       .get('/user', config)
       .then(response => {
           setUsers(response.data);
           console.log(response.data);
       });

   }, []);

   function logout() {
       auth.logout();
   }


    return(
        <div>
            <h1>Página Dashboard</h1>
            <ul>
            <li> {users ? users.map(user => user.login) : ''}</li>
                
            </ul>
            <button onClick={() => logout()}>Sair</button>
        </div>
    );
}
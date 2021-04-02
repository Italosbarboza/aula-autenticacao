import React, { useState, useContext }  from 'react';

import authContext from '../../context/auth';

export default function Login() {

    const auth = useContext(authContext);

    const [login, setLogin] = useState();
    const [pswd, setPswd] = useState();

    function handleLogin(e) {
        setLogin(e.target.value);
    }

    function handlePswd(e) {
        setPswd(e.target.value);
    }

    function signIn() {
        auth.signIn({login, pswd});
    }

    return(
        <div>
            <h1>Digite o seu login, </h1>
            <input onChange={handleLogin}></input>
            <h1>Digite a sua senha</h1>
            <input onChange={handlePswd}></input>
            <button onClick={() => signIn()}>Entrar</button>
        </div>
    );
}
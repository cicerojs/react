import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useUsuarioLogado } from '../../shared/hooks/UseUsuarioLogado';

export const Dashboard = () => {

    const counterRef = useRef({ counter: 0 });

    const nomeDoUsuário  = useUsuarioLogado();

    return (
        <div>
            <p>Dashboard</p>
            <p>{nomeDoUsuário}</p>

            <p>Contador:{counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Logar</button>
            
            <Link to="/entrar">Login</Link>
        </div>
        
    )
}
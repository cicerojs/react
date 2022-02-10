import {useCallback, useMemo, useRef, useState } from "react";


export const Login = () => {

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const emailLength = useMemo(() => { //Guarda na memória cálculos complexos para que sejam reexecutados apenas uma vez 
    console.log('Executou');
    return email.length;
  }, [email.length]) ;

  const handleEntrar = useCallback( () => {//Guarda na memória funções para que sejam reconstruídos
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form>

        <p>A quantidade de caracteres é: {emailLength}</p>

        <label>
          <span>Email</span>
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} 
          />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" 
                 value={password} 
                 ref={inputPasswordRef}
                 onChange={e => setPassword(e.target.value)} />

        </label>

        <button type="button" onClick={handleEntrar}>Entrar</button>
      </form>
    </div>
  )
}
  
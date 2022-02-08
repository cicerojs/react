import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  const history = useNavigate();

  const handleClick = () => {
    history('/pagina-inicial')
  }

  return (
    <div>
      Login<br />

      <button onClick={handleClick}>pagina inicial</button>
    </div>
  )
}
  
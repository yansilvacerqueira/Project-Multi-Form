import * as Style from './styles'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const changePath = useNavigate();

    const redirect = () => {
        setTimeout(() => {
            changePath('/')
        }, 3000)
    }

    redirect();
    return (
        <Style.Container>
            <h1>Essa pagina nao existe</h1>
            <p>Voce sera redirecionado para a pagina principal dentro de alguns segundos</p>
        </Style.Container>
    )
}

export default Error;
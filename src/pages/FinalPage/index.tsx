import * as Styles from './styles';
import { useForm } from '../../contexts/FormContext';

const FinalPage = () => {
    const {state} = useForm();

    return (
        <Styles.Container>
            <h1>Obrigado {state.name} por fazer seu cadastro </h1>
            <p>Seu Email: {state.email}</p>
            <p>Seu GitHub: {state.gitHub}</p>
            {state.level === 0 && <p>Seu Nivel Profissional: Iniciante </p>}
            {state.level === 1 && <p>Seu Nivel Profissional: Avancado </p>}

            <p>Logo entraremos em contato com voce, obrigado pela confianca !</p>

        </Styles.Container>
    )
}

export default FinalPage;

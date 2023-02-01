import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../contexts/types';

import * as Style from './styles'
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import SelectOption from '../../components/SelectOption';

const FormStep2 = () => {
    const changePath  = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        if (state.name === '') {
            changePath('/');
        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleNextStep = () => {
        if (state.name !== '') {
            changePath('/step3')
        } else {
            alert("Preencha os dados")
        }
    }

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve voce ?</h1>
                <p>Escolha a opcao que melhor condiz com seu estado profissional atualmente</p>

                <hr />

                <SelectOption 
                    title = "Sou Iniciante"
                    description = "Estou comecando no mundo da programacao"
                    icon = "😇"
                    selected = {state.level === 0}
                    onClick = {() => setLevel(0)}
                />

                <SelectOption 
                    title = "Ja to Careca de resolver problema"
                    description = "Ja sou senior fodase"
                    icon = "😈"
                    selected = {state.level === 1}
                    onClick = {() => setLevel(1)}
                />

                <Link to={'/'} className='backButton'> Voltar </Link>
                <button onClick={handleNextStep}> Proximo </button>
            </Style.Container>
        </Theme>
    )
}

export default FormStep2;
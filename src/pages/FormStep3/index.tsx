import { useNavigate } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../contexts/types';

import * as Style from './styles'
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

const FormStep3 = () => {
    const changePath  = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleNextStep = () => {
        if (state.email !== '' && state.gitHub !== '') {
            changePath('/finalPage')
        } else {
            alert("Preencha o campo de Email e o coloque link para seu GitHub")
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        })
    }

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te Achamos ?</h1>
                <p>preencha o campo abaixo com seus dados para 
                conseguirmos entrar em contato</p>

                <hr />

                <label htmlFor="email">Qual Seu email ? </label>
                <input type="email" id='email'  value={state.email} onChange={handleEmailChange}/>

                <label htmlFor="github">Qual Seu GitHub ? </label>
                <input type="url" id='github'  value={state.gitHub} onChange={handleGitHubChange}/>

                <button onClick={handleNextStep}> Finalizar Cadastro </button>
            </Style.Container>
        </Theme>
    )
}

export default FormStep3;
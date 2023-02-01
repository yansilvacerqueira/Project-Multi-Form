import { useNavigate } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';
import { FormActions } from '../../contexts/types';

import * as Style from './styles'
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

const FormStep1 = () => {
    const changePath  = useNavigate();
    const {state, dispatch} = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleNextStep = () => {
        if (state.name !== '') {
            changePath('/step2')
        } else {
            alert("Preencha os dados")
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Style.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos comecar com seu nome</h1>
                <p>preencha o campo abaixo com seu nome completo</p>

                <hr />

                <label htmlFor="Name">Seu Nome Completo </label>
                <input type="text" id='name' autoFocus value={state.name} onChange={handleNameChange}/>

                <button onClick={handleNextStep}> Proximo </button>
            </Style.Container>
        </Theme>
    )
}

export default FormStep1;
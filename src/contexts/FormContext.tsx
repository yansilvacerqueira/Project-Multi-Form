import { createContext, useContext, useReducer } from "react";
import { Action, ContextType, State, FormActions, FormProviderProps } from "./types";

/**
* Criar Context;
 * Criar Reducer;
 * Criar Provider;
 * Criar Hook para simplificar o processo ao acesso a informacao do
contexto;
 */


//Dados Inicias
const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    gitHub: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
const FormReducer = (state: State, action: Action) => {
    
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, gitHub: action.payload};
        default:
            return state;
    }

}

//Provider
export const FormProvider = ({children}: FormProviderProps) => {
    
    const [state, dispatch] = useReducer(FormReducer, initialData);
    const value = {state, dispatch}

    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Context Hook

export const useForm = () =>{
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error("UseForm precisa ser usado dentro de formProvider")
    }

    return context;
}
import { ReactNode } from "react";

export type Action = {
    type: FormActions,
    payload: any,
}

export type ContextType = {
    state: State,
    dispatch: (action:Action) => void;
}

export type State = {
    currentStep:number,
    name:string,
    level: 0 | 1,
    email: string,
    gitHub: string
}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

export type FormProviderProps = {
    children: ReactNode;
}
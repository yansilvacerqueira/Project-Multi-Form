import { ReactNode } from 'react'
import Header from '../Header'
import * as Style from './styles'
import SideBarItem from '../SideBarItem';

import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {

    const {state} = useForm();
    
    return (
        <Style.Container>
            <Style.Area>
                
                <Header />

                <Style.Steps>
                    
                    <Style.Sidebar>
                        
                        <SideBarItem 
                            title = "Pessoal"
                            description = "se Identifique"
                            icon = "profile"
                            path = "/"
                            active = {state.currentStep === 1}
                        />

                        <SideBarItem 
                            title = "Profissional"
                            description = "Seu Nivel"
                            icon = "book"
                            path = "/step2"
                            active = {state.currentStep === 2}
                        />

                        <SideBarItem 
                            title = "Contatos"
                            description = "Como te achar"
                            icon = "mail"
                            path = "/step3"
                            active = {state.currentStep === 3}
                        />

                    </Style.Sidebar>

                    <Style.Page>
                        {children}
                    </Style.Page>

                </Style.Steps>

            </Style.Area>
        </Style.Container>
    )
}


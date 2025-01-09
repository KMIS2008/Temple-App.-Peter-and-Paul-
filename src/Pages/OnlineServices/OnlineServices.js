import {ServicesForm} from '../../components/Services/Services';
import { Tittle } from 'components/Title/Title';
import {PasswordCheck} from '../../components/PasswordCheck/PasswordCheck';

export default function OnlineServices(){
    return(
        <>
        <Tittle Tittle title="Записки за здоров'я та за упокій"></Tittle>
        <ServicesForm/>
        <PasswordCheck/>
        </>
    )
} 
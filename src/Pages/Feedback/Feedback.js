import {Tittle} from '../../components/Title/Title';
import {FeedBack} from '../../components/Feedback/Feedback';
import {PasswordCheck} from '../../components/PasswordCheck/PasswordCheck';

export default function Feedback(){
    return(
        <>
        <Tittle title="Зворотній зв'язок"></Tittle>
        <FeedBack/>
        <PasswordCheck/>
        </>
    )
}
import {Tittle} from '../../components/Title/Title';
import {FeedBack} from '../../components/Feedback/Feedback';
import {PasswordCheck} from '../../components/PasswordCheck/PasswordCheck';
import { Container } from './Feedback.styled';

export default function Feedback(){
    return(
        <Container>
           <Tittle title="Зворотній зв'язок"></Tittle>
           <FeedBack/>
           <PasswordCheck/>
        </Container>
    )
}
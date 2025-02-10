import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import { Container } from './SchedulesPage.styled';
import { Tittle } from 'components/Title/Title';


export default function SchedulePage(){
    return(
        <Container>
            <Tittle title={'Богослужіння'}/>
            <ServiceHighlighter/>
        </Container>
    )
}
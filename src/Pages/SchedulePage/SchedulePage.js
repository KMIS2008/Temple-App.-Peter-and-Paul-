import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {Sacraments} from '../../components/Schedule/Sacraments';
import { Container } from './SchedulesPage.styled';
import { Tittle } from 'components/Title/Title';


export default function SchedulePage(){
    return(
        <Container>
            <Tittle title={'Богослужіння'}/>
            <ServiceHighlighter/>
            <Sacraments/>
        </Container>
    )
}
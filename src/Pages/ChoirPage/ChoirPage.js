import {AboutChoir} from '../../components/AboutChoir/AboutChoir';
import { Tittle } from 'components/Title/Title';
import { Container, Image } from './ChoirPage.styled';
import choir from '../../images/Choir.jpg';

export default function ChoirPage(){
    return(
        <Container>
            <Tittle title={'Хор'}/>
            <Image src={choir} alt="player"/>
           <AboutChoir/>
        </Container>
    )

}
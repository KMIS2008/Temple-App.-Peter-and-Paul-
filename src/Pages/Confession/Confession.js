import {ConfessionDescription} from '../../components/ConfessionDescription/ConfessionDescription';
import {Container} from './Confession.styled';
import { Tittle } from "components/Title/Title";

export default function Confession(){
    return(
        <Container>
             <Tittle title={"Сповідь"}/>
             <ConfessionDescription/>
        </Container>
    )
}
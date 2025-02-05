import {Donations} from '../../components/Donation/Donation';
import { Tittle } from 'components/Title/Title';
import { Container } from './Donation.styled';

export default function Donation(){
    return(
        <Container>
           <Tittle title="Добровільна пожертва"/>
           <Donations/>
        </Container>
    )
}
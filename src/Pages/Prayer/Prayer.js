import {AllPrayer} from '../../components/AllPrayer/AllPrayer';
import { Tittle } from 'components/Title/Title';
import { Container } from './Prayer.styled';


export default function Prayer(){


    return(
        <Container>
          <Tittle Tittle title="Молитви"></Tittle>
          <AllPrayer/>
        </Container>
    )
}
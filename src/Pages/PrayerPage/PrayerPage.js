import {AllPrayer} from '../../components/AllPrayer/AllPrayer';
import { Tittle } from 'components/Title/Title';
import { Container } from './PrayerPage.styled';


export default function PrayerPage(){


    return(
        <Container>
          <Tittle Tittle title="Молитви"></Tittle>
          <AllPrayer/>
        </Container>
    )
}
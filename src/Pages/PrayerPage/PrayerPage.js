import {AllPrayer} from '../../components/AllPrayer/AllPrayer';
import { Tittle } from 'components/Title/Title';
import { Container } from './PrayerPage.styled';
import { PrayerDiscription } from 'components/PrayerDiscription/PrayerDiscription';
import { initSideWays } from 'components/Heart/Heart';
import { useEffect } from 'react';


export default function PrayerPage() {

  useEffect(() => {
    initSideWays()
  },[])


    return(
        <Container>
          <Tittle Tittle title="Молитви"></Tittle>
          <PrayerDiscription/>
          <AllPrayer/>
        </Container>
    )
}
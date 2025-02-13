import { useState } from 'react';
import {Communion} from '../Communion/Communion';
import {Container, TitlePart} from './AllPrayer.styled';
import {PrayerForUkrane} from '../PrayerForUkrane/PrayerForUkrane';
import {PrayerAllNeeds} from '../PrayerAllNeeds/PrayerAllNeeds';
import { Link } from 'react-router-dom';


export const AllPrayer=()=>{

    const [showCommunionPrayers, setShowCommunionPrayers] = useState(false);
    const [showPrayerForUkrane, setSowPrayerForUkrane] = useState(false);
    const [showPrayerAllNeeds, setShowPrayerAllNeeds] = useState(false);

  const handleClickCommunion=()=>{
    setShowCommunionPrayers(!showCommunionPrayers)
}

const handleClickPrayerForUkrane=()=>{
    setSowPrayerForUkrane(!showPrayerForUkrane)
}

const handleClickPrayerAllNeeds=()=>{
    setShowPrayerAllNeeds(!showPrayerAllNeeds)
}


    return(
        <Container>
         
           <Link to={'/morning-prayer'}>Молитви ранкові</Link>

           <Link to={'/evening-prayer'}> Молитви вечірні</Link>
        


           <TitlePart onClick={handleClickPrayerForUkrane}>Молитви за Україну</TitlePart>
           {showPrayerForUkrane&&<PrayerForUkrane/>}

           <TitlePart onClick={handleClickPrayerAllNeeds} > Молитви на всяку потребу.</TitlePart>
           {showPrayerAllNeeds&&<PrayerAllNeeds/>}

           <TitlePart onClick={handleClickCommunion}>Молитовне правило до св. Причастя</TitlePart>
           {showCommunionPrayers&&<Communion/>}
           
        </Container>
    )
}
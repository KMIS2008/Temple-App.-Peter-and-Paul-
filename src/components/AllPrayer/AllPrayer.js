import { useState } from 'react';
import {MorningPrayers} from '../MorningPrayers/MorningPrayers';
import {EveningPrayers} from '../EveningPrayers/EveningPrayers';
import {Communion} from '../Communion/Communion';
import {Container, TitlePart} from './AllPrayer.styled';



export const AllPrayer=()=>{

    const [showMorningPrayers, setShowMorningPrayers] = useState(false);
    const [showEverningPrayers, setShowEverningPrayers] = useState(false);
    const [showCommunionPrayers, setShowCommunionPrayers] = useState(false);

    const handleClickMorning=()=>{
        setShowMorningPrayers(!showMorningPrayers)
   }

   const handleClickEverning=()=>{
    setShowEverningPrayers(!showEverningPrayers)
}

  const handleClickCommunion=()=>{
    setShowCommunionPrayers(!showCommunionPrayers)
}


    return(
        <Container>
         

           <TitlePart onClick={handleClickMorning}>Молитви ранкові</TitlePart>
           {showMorningPrayers && <MorningPrayers />}
           <TitlePart onClick={handleClickEverning}>Молитви вечірні</TitlePart>
           {showEverningPrayers&&<EveningPrayers/>}
           <TitlePart onClick={handleClickCommunion}>Молитовне правило до св. Причастя</TitlePart>
           {showCommunionPrayers&&<Communion/>}
           
        </Container>
    )
}
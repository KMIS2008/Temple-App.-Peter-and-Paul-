import { useState } from 'react';
import { Tittle } from 'components/Title/Title';
import {MorningPrayers} from '../../components/MorningPrayers/MorningPrayers';
import {EveningPrayers} from '../../components/EveningPrayers/EveningPrayers';
import {TitlePart} from './Prayer.styled';



export default function Prayer(){
    const [showMorningPrayers, setShowMorningPrayers] = useState(false);
    const [showEverningPrayers, setShowEverningPrayers] = useState(false);

    const handleClickMorning=()=>{
        setShowMorningPrayers(!showMorningPrayers)
   }

   const handleClickEverning=()=>{
    setShowEverningPrayers(!showEverningPrayers)
}

    return(
        <>
           <Tittle Tittle title="Молитви"></Tittle>
           <TitlePart onClick={handleClickMorning}>Молитви ранкові</TitlePart>
           {showMorningPrayers && <MorningPrayers />}
           <TitlePart onClick={handleClickEverning}>Молитви вечірні</TitlePart>
           {showEverningPrayers&&<EveningPrayers/>}
           
        </>
    )
}
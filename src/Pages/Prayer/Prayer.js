import { useState } from 'react';
import { Tittle } from 'components/Title/Title';
import {MorningPrayers} from '../../components/MorningPrayers/MorningPrayers';
import {TitlePart} from './Prayer.styled';



export default function Prayer(){
    const [showMorningPrayers, setShowMorningPrayers] = useState(false);

    const handleClickMorning=()=>{
        setShowMorningPrayers(!showMorningPrayers)
   }

    return(
        <>
           <Tittle Tittle title="Молитви"></Tittle>
           <TitlePart onClick={handleClickMorning}>Молитви ранкові</TitlePart>
           {showMorningPrayers && <MorningPrayers />}
           
        </>
    )
}
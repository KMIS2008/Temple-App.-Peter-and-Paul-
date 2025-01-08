import { useState } from 'react';
import {ContainerHome} from "./Homestyled";
import {Tittle} from '../../components/Title/Title';
import { About } from "components/About/About";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from "react-router-dom";
import {PayDonation} from '../../components/Donation/PayDonation';
import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {Views} from '../../components/Views/Views';
import {TitlePart} from '../Prayer/Prayer.styled';
import {MorningPrayers} from '../../components/MorningPrayers/MorningPrayers';
import {EveningPrayers} from '../../components/EveningPrayers/EveningPrayers';
import {Communion} from '../../components/Communion/Communion';
import { 
  // useDispatch, 
  useSelector } from "react-redux";

import { selectCount } from "redux/visits/selects";



export default function Home(){
  
  const count= useSelector(selectCount);

  const navigate= useNavigate();

  const handleClickAbout=()=>{
    navigate("/about-us")
  }

  const handleClickVirtual=()=>{
    navigate("/virtual-tour")
  }

const handleClickSchedule=()=>{
  navigate("/schedule")
}

const handleClickPrayer=()=>{
  navigate("/prayer")
}

const handleClickDonation=()=>{
  navigate("/donation")
}

const handleClickOnlineServices=()=>{
  navigate("/online-services")
}

const handleClickChoir=()=>{
  navigate("/choir")
}

const handleClickSundaySchool=()=>{
  navigate("/sunday-school")
}

const handleClickFeedBack=()=>{
  navigate("/feedback")
}

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

  
return (
    <ContainerHome>
       <Tittle Tittle handleClick={handleClickAbout} title="Про нас"></Tittle>
        <About/>
        <Tittle handleClick={handleClickVirtual} title="Віртуальний тур"></Tittle>
        <VideoPlayer />
        <ServiceHighlighter handleClick={handleClickSchedule}/>

        <Tittle handleClick={handleClickPrayer} title="Молитва"></Tittle>   
        <TitlePart onClick={handleClickMorning}>Молитви ранкові</TitlePart>
        {showMorningPrayers && <MorningPrayers />}
        <TitlePart onClick={handleClickEverning}>Молитви вечірні</TitlePart>
        {showEverningPrayers&&<EveningPrayers/>}
        <TitlePart onClick={handleClickCommunion}>Молитовне правило до св. Причастя</TitlePart>
        {showCommunionPrayers&&<Communion/>}


        <Tittle handleClick={handleClickDonation} title="Пожертва"></Tittle>
        <PayDonation/>
        <Tittle handleClick={handleClickOnlineServices} title="Онлайн Послуги"></Tittle> 
        <Tittle handleClick={handleClickChoir} title="Хор"></Tittle> 
        <Tittle handleClick={handleClickSundaySchool} title="Недільня школа"></Tittle> 
        <Tittle handleClick={handleClickFeedBack} title="Зворотній зв'язок"></Tittle> 
        <Views count={count}/>

    </ContainerHome>
)}
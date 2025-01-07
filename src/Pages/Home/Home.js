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

const handleClickMorning=()=>{
    setShowMorningPrayers(!showMorningPrayers)
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

        <Tittle handleClick={handleClickDonation} title="Пожертва"></Tittle>
        <PayDonation/>
        <Tittle handleClick={handleClickOnlineServices} title="Онлайн Послуги"></Tittle> 
        <Tittle handleClick={handleClickChoir} title="Хор"></Tittle> 
        <Tittle handleClick={handleClickSundaySchool} title="Недільня школа"></Tittle> 
        <Tittle handleClick={handleClickFeedBack} title="Зворотній зв'язок"></Tittle> 
        <Views count={count}/>

    </ContainerHome>
)
}
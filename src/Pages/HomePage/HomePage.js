import {ContainerHome, Image} from "./HomePage.styled";
import {Tittle} from '../../components/Title/Title';
import { AboutSecond } from "components/About/AboutSecond";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import { Link} from "react-router-dom";
import {PayDonation} from '../../components/Donation/PayDonation';
import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {SacramentsHome} from '../../components/Schedule/SacramentsHome';
import {Views} from '../../components/Views/Views';
import {useSelector } from "react-redux";
import { selectCount } from "redux/visits/selects";
// import candle from '../../images/15.jpg';
import player from '../../images/31.jpg';
// import feedback from '../../images/8.jpg';
// import choir from '../../images/Choir.jpg';
// import { AllPrayer } from 'components/AllPrayer/AllPrayer';
import {Main} from '../../components/Main/Main';
import { InfoModal } from "components/Modal/Modal";
import { useEffect, useState } from "react";
import { Contacts } from "components/Contacts/Contacts";
import { AudioTittle } from 'components/AudioTittle/AudioTittle';


export default function Home(){

  const [isModal, setModal]=useState(false)
  
  const count= useSelector(selectCount);


useEffect(()=>{
  setModal(true)
},[])

return (
    <ContainerHome>
   
        <Tittle  title="Головна"/>
        <Main />
          
        <Link to={'/about-us'}>
             <Tittle title="Про нас"/>
        </Link>
        <AboutSecond />   
    
        <Link to={'/schedule'}>
             <AudioTittle >Богослужіння</AudioTittle>
        </Link>
        <ServiceHighlighter />
        <SacramentsHome/>

        <Link to={'/virtual-tour'}>
             <Tittle title="Віртуальний тур"/>
        </Link>
        <VideoPlayer />
    
        <Link to={'/prayer'}>
             <Tittle title="Молитви"/>
        </Link>
        <Image src={player} alt="player"/>

        <Link to={'/donation'}>
             <Tittle title="Пожертва"/>
        </Link>
        <PayDonation/>

       <Tittle title="Контакти"/>
       <Contacts />
    
        <Views count={count}/>

        <InfoModal isModal={isModal} setModal={setModal}/>

    </ContainerHome>
)}
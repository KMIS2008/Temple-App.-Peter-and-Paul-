import {ContainerHome, Image} from "./Homestyled";
import {Tittle} from '../../components/Title/Title';
import { About } from "components/About/About";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from "react-router-dom";
import {PayDonation} from '../../components/Donation/PayDonation';
import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {Views} from '../../components/Views/Views';
import {useSelector } from "react-redux";
import { selectCount } from "redux/visits/selects";
import candle from '../../images/15.jpg';
import player from '../../images/31.jpg';
import feedback from '../../images/8.jpg';
import { AllPrayer } from 'components/AllPrayer/AllPrayer';



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


  
return (
    <ContainerHome>
       <Tittle Tittle handleClick={handleClickAbout} title="Про нас"></Tittle>
        <About/>

        <Tittle handleClick={handleClickVirtual} title="Віртуальний тур"></Tittle>
        <VideoPlayer />

        <ServiceHighlighter handleClick={handleClickSchedule}/>

        <Tittle handleClick={handleClickPrayer} title="Молитви"></Tittle>
        <AllPrayer/>
        <Image src={player} alt="player"/>

        <Tittle handleClick={handleClickDonation} title="Пожертва"></Tittle>
        <PayDonation/>

        <Tittle handleClick={handleClickOnlineServices} title="Онлайн Послуги"></Tittle>
        <Image src={candle} alt='candle'/> 

        <Tittle handleClick={handleClickChoir} title="Хор"></Tittle> 

        <Tittle handleClick={handleClickSundaySchool} title="Недільня школа"></Tittle> 

        <Tittle handleClick={handleClickFeedBack} title="Зворотній зв'язок"></Tittle> 
        <Image src={feedback} alt='sky'/> 

        <Views count={count}/>

    </ContainerHome>
)}
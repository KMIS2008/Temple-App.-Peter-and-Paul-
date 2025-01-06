
import {ContainerHome} from "./Homestyled";
import {Tittle} from '../../components/Title/Title';
import { About } from "components/About/About";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from "react-router-dom";
import {PayDonation} from '../../components/Donation/PayDonation';
import {ServiceHighlighter} from '../../components/Schedule/Schedule';
import {Views} from '../../components/Views/Views';
// import { useEffect } from "react";
import { 
  // useDispatch, 
  useSelector } from "react-redux";
// import { fetchvisits, addCount } from "redux/operations";
import { selectCount } from "redux/visits/selects";



export default function Home(){
  // const dispatch= useDispatch();
 

  // useEffect(()=>{
  //   dispatch(fetchvisits());

  // },[dispatch])


  // useEffect(()=>{
  
  //   dispatch(addCount())

  // },[dispatch])

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
        <Tittle handleClick={handleClickPrayer} title="Молитва"></Tittle>        
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
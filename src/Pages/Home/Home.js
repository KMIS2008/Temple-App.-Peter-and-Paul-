import {ContainerHome} from "./Homestyled";
import {Tittle} from '../../components/Title/Title';
import { About } from "components/About/About";
import {VideoPlayer} from '../../components/VideoPlayer/VideoPlayer';


import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate= useNavigate();

  const handleClickAbout=()=>{
    navigate("/about-us")
  }

  const handleClickVirtual=()=>{
    navigate("/virtual-tour")
  }
  
return (
    <ContainerHome>
        <Tittle handleClick={handleClickAbout} title="Про нас"></Tittle>
        <About/>
        <Tittle handleClick={handleClickVirtual} title="Віртуальний тур"></Tittle>
        <VideoPlayer/>


 

  
    </ContainerHome>
)
}
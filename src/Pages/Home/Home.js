import {ContainerHome} from "./Homestyled";
import {Tittle} from '../../components/Title/Title';
import { About } from "components/About/About";


import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate= useNavigate();

  const handleClick=()=>{
    navigate("/about-us")
  }
  
return (
    <ContainerHome>
        <Tittle handleClick={handleClick} title="Про нас"></Tittle>
        <About/>
 

  
    </ContainerHome>
)
}
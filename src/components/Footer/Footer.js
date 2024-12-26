import icon from '../../images/icon.jpg';
import {Contater, ContainerLogo, Text, Title, Adress, Line, ContainerCopyright, CotnainerLinks} from './Footer.styled';
import {FooterBottom} from '../FooterBottom/FooterBottom';
import {SocialMediaIcons} from '../SocialMediaIcons/SocialMediaIcons';
// import { useEffect, useState } from 'react';

export const Footer=()=>{
    // const stylefooter=true;
    // const [isTablet, setisTablet] = useState(window.innerWidth > 768);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setisTablet(window.innerWidth > 768);
    //   };
  
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);

    return(
        <Contater>
            <CotnainerLinks>
               <ContainerLogo>
                  <img src={icon} alt='cross' width={32} height='auto'/>
                  <Text>
                    Церковь апостолів Петра і Павла
                  </Text>                
               </ContainerLogo>
               <div>
                <Title>Приходьте:</Title>
                <Adress>с. Петропавлівське вул. Молодіжна 2-а Київська область Бориспільський район</Adress>
               </div>
               <div>
                <Title>Пишіть:</Title>
                <Adress>ocu.petropavlivske@gmail.com</Adress>
               </div>
               <div>
                <Title>Дзвоніть:</Title>
                <Adress>+380-98-273-47-47</Adress>
               </div>
               
                  <SocialMediaIcons /> 
                
            </CotnainerLinks>

            <Line></Line>
            <ContainerCopyright>
               <FooterBottom/>
            </ContainerCopyright>

        </Contater>
    )
}
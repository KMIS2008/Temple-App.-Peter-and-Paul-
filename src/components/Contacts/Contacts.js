import { Container, Adress, LinkAdress, Title, ContainerSocialMediaIcons } from './Contacts.styled';
import sprite from '../../images/sprite.svg';
import {SocialMediaIcons} from '../SocialMediaIcons/SocialMediaIcons';


export const Contacts = () => {
    return(
        <Container>
     
            <Title>Адреса:</Title>
            <Adress>с. Петропавлівське вул. Молодіжна 2-а Київська область Бориспільський район</Adress>                

            <LinkAdress 
                   href="https://www.google.com/maps?q=50.32507106782345,30.822187499999995" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Як доїхати
                   <svg width={40} height={40}>
                  <use xlinkHref={sprite + '#icon-home'} />
                  </svg> 
            </LinkAdress> 
            
            <Title>Пишіть:</Title>
            <Adress>ocu.petropavlivske@gmail.com</Adress>

            <Title>Дзвоніть:</Title>
            <Adress>+380-98-273-47-47</Adress>

            <ContainerSocialMediaIcons>
               <SocialMediaIcons />             
            </ContainerSocialMediaIcons>

     

        </Container>
    )
}
import {Container, Title} from './AboutUs.styled';
import { About } from 'components/About/About';

export default function AboutUs(){
    return(
      <Container>
         <Title> Про нас </Title>
         <About/>
      </Container>
    )
}
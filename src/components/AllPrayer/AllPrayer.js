import { useState } from 'react';
import {Communion} from '../Communion/Communion';
import {Container, TitlePart, LinkPrayer} from './AllPrayer.styled';

export const AllPrayer=()=>{

    const [showCommunionPrayers, setShowCommunionPrayers] = useState(false);

  const handleClickCommunion=()=>{
    setShowCommunionPrayers(!showCommunionPrayers)
}

    return(
        <Container>
         
           <LinkPrayer to={'/morning-prayer'}>Молитви ранкові</LinkPrayer>

           <LinkPrayer to={'/evening-prayer'}> Молитви вечірні</LinkPrayer>

           <LinkPrayer to={'/for-ukraine-prayer'}>Молитви за Україну </LinkPrayer>

           <LinkPrayer to={'/all-needs'}> Молитви на всяку потребу </LinkPrayer>
        

           <TitlePart onClick={handleClickCommunion}>Молитовне правило до св. Причастя</TitlePart>
           {showCommunionPrayers&&<Communion/>}
           
        </Container>
    )
}
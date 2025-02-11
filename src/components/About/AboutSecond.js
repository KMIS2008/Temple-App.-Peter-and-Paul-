import {Container, Text, Image, Span} from './About.styled';
import rector from '../../images/rector.jpg';


export function AboutSecond(){
    return(
        <>
        <Container>
            <div>
                <Text>
                    РЕЛІГІЙНА ОРГАНІЗАЦІЯ «РЕЛІГІЙНА ГРОМАДА ПАРАФІЯ АПОСТОЛІВ ПЕТРА І ПАВЛА КИЇВСЬКОЇ ЄПАРХІЇ УКРАЇНСЬКОЇ ПРАВОСЛАВНОЇ ЦЕРКВИ (ПРАВОСЛАВНОЇ ЦЕРКВИ УКРАЇНИ) С. ПЕТРОПАВЛІВСЬКЕ БОРИСПІЛЬСЬКОГО РАЙОНУ КИЇВСЬКОЇ ОБЛАСТІ» налічує близько двохсот парафіян, та чисельність її постійно збільшується.
                </Text>    

                <Text>
                До настоятеля протоієрея Олега можна звернутися за телефоном  +38 098 273 47 47, або за електронною адресою: <Span> ocu.petropavlivske@gmail.com.</Span>
                </Text>
         
            </div>
            
              <Image src={rector} alt='rector of the church'/>

              </Container>
        </>
    )
}
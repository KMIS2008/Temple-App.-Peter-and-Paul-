import {Container, Text, Image, Span, LinkAuto} from './About.styled';
import rector from '../../images/rector.jpg';


export function About(){
    return(
        <>
            <Container>
            <div>
                <Text>
                Після початку повномасштабної агресії зі сторони російської федерації, 18 червня 2022 року релігійна громада Храму апостолів Петра і Павла с. Петропавлівське на загальних зборах прийняла історичне рішення про зміну підлеглості у канонічних та організаційних питаннях шляхом входу до складу релігійного об’єднання – Православної Церкви України.
                </Text>

                <Text> 
                        У вересні 2022 року, Указом Предстоятеля Православної Церкви України Блаженнішим Митрополитом Київським і всієї України Єпіфанієм, настоятелем парафії апостолів Петра і Павла призначено священника
                        <LinkAuto to={'/autobiography'}> Олексюка Олега Ярославовича.
                    </LinkAuto>       
                </Text>

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
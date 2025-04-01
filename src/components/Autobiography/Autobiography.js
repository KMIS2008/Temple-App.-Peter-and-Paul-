import { Container, Title, Text, Image } from './Autobiography.styled';
import rector from '../../images/rector.jpg';

export const Autobiography = () => {
    return (
        <>
            <Title>Протоієрей Олег Олексюк</Title>
            <Container>
                
            <div>
            <Text>
                Народився 11 вересня 1980 року в селі Дубляни Демидівського району Рівненської
області. Українець, громадянин України.
            </Text>
            <Text>
                Закінчивши Демидівську середню школу, у 1995 році вступив до Волинської
духовної семінарії, яку закінчив у 1998 році.
            </Text>
            <Text>
                У 1998–2002 роках навчався в Київській духовній академії та захистив дипломну
роботу на тему: «Православне розуміння людської свободи».
            </Text>
            <Text>
                18 листопада 2012 року рукоположений у сан диякона, а 21 квітня 2013 року — у
сан священника.
            </Text>
            <Text>
                14 березня 2014 року призначений священиком парафії святителя Миколая
Чудотворця в Дарницькому районі м. Києва (Бортничі).
            </Text>
            <Text>
                9 червня 2022 року призначений настоятелем парафії преподобного Павла
Послушного с. Чубинське, а 15 вересня 2022 року — настоятелем парафії святих апостолів
Петра і Павла Київської єпархії Православної Церкви України с. Петропавлівське
Бориспільського району Київської області.
            </Text>
            <Text>
                У 2024 році, напередодні свята Пасхи, у Свято-Михайлівському Золотоверхому
монастирі Митрополитом Київським і всієї України Епіфанієм возведений у сан
протоієрея.
            </Text>                
             </div>
                <Image src={rector} alt='rector of the church' />             
            </Container>
        </>
    )
}
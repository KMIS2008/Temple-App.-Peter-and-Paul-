import {Container, Text, Image} from './About.styled';
import rector from '../../images/rector.jpg';

export function About(){
    return(
        <>
        <Container>
            <div>
                <Text>
                    Церква апостолів Петра і Павла виконана у традиційному стилі, характерному для східнослов’янської православної архітектури. 
                    На фото зображено будівлю з трьома куполами золотистого кольору та зеленою покрівлею.
                    Три куполи символізують Святу Трійцю (Отець, Син і Святий Дух). Золотий колір куполів має символічне значення – 
                    він уособлює божественне світло, святість і вічне життя.
                    Стиль в архитектурі - традиційний православний з елементами українського зодчества. Він характеризується симетричністю, 
                    наявністю куполів і використанням яскравих кольорів (зелений дах та золоті куполи).
        
                    Вхід до церкви підкреслюється критою галереєю. Будівля оточена доглянутою територією із зеленими насадженнями.
                    Церква є гармонійним поєднанням традицій та сучасного підходу у будівництві православних храмів.
                </Text>
                
                <Text>Собор належить до Православної Церкви України.</Text>
        
                <Text>Настоятель церкви: Олексюк Олег Ярославович</Text>    

                <Text>Хрещення в храмі може бути звершено кожного дня, вінчання – у дні, встановлені Церквою для відправи цього таїнства. 
                      Стосовно питань освячення квартир, приміщень, автомобілів, молебні про різні потреби, відспівування та інше – 
                      звертайтеся за телефоном або за адресою: ocu.petropavlivske@gmail.com.
                </Text>

                <Text>Телефон настоятеля: +380-98-273-47-47.</Text>
            
            </div>
            
            <Image src={rector} alt='rector of the church'/>

              </Container>
        </>
    )
}
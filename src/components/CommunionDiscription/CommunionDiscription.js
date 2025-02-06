import {Text, Title} from "./CommunionDiscription.styled";
import {Communion} from '../Communion/Communion';
import { useState } from "react";

export const CommunionDiscription=()=>{

    const [showPrayers,setShowPrayers]=useState(false);
    const handleClickPrayer=()=>{
        setShowPrayers(!showPrayers)
    }

    return(
        <>
        <Text>
        До Причастя треба підходити свідомо, розуміючи, що жодна людина у світі не є гідною того, щоби прийняти Тіло
         і Кров самого Бога.
За Златоустом, достойне причастя — таке, що супроводжується духовним трепетом і гарячою любов’ю, вірою у реальну 
присутність Христа в Святих Дарах та усвідомленням величі святині.

Для того, щоби випробувати свою совість перед святим Причастям, християни сповідують гріхи. Не можна підходити до 
Чаші у стані смертного гріха, наприклад, після аборту, відвідин гадалки, перелюбу чи живучи у т.зв. “цивільному шлюбі”.
Такі гріхи вимагають щирого покаяння та виправлення життя, тільки тоді можливе Причастя. Сповідь перед Причастям — 
не тільки благочестива традиція, а й реальна допомога людині очиститися. До того ж, це можливість безпосередньо 
поспілкуватись із священиком про найголовніше.

Для того, щоб причаститися, також треба перебувати в мирі з усіма людьми, принаймні не мати бажання помститися. 
У стані ворожнечі чи ненависті прийняти таїнство неможливо. Господь Ісус Христос сказав: “Якщо ти приносиш до жертовника 
дар твій і там пригадаєш, що брат твій щось має супроти тебе, залиши дар твій перед жертовником, і піди, помирися 
перше з братом твоїм, і відтак прийди й принеси дар свій”.
        </Text>
        
        <Text>
        Під час підготовки обов’язково слід намагатися більше молитися, читати Священне Писання, не вживати м’ясні 
        та молочні продукти, яйця, утримуватися від подружніх відносин. Напередодні Причастя ввечері необхідно бути 
        присутнім на вечірньому богослужінні і сповідатися в гріхах. Часто сповідь проходить і вранці: або перед 
        Літургією, або після співу молитви «Отче наш». Якщо в храмі або монастирі кілька священиків, то один може 
        звершуювати Літургію, а інший під час богослужіння сповідувати.
        </Text>

    <Text>
    Під час підготовки до Святого Причастя потрібно прочитати три канони: Канон покаянний до Господа нашого Іісуса 
    Христа, Канон молебний до Пресвятої Богородиці і Канон Ангелу Хранителю, а також Послідування до Святого 
    Причастя. Всі ці тексти поміщені в книзі «Молитвослов». Крім того, в день Причастя з півночі не слід ні їсти, 
    ні пити. З ранку прийти, не запізнюючись, на службу, і коли почнеться Причастя, благоговійно підійти до Святої 
    Чаші, хрестоподібно склавши руки на грудях. Після прийняття Тіла і Крові Христових слід відійти і прийняти 
    запивку і шматочок проскури, після чого вислухати в храмі або самому прочитати вдома по молитвослову Подячні 
    молитви після Святого Причастя.
    </Text>

    <Title onClick={handleClickPrayer}> Молитовне правило до святого Причастя </Title>
    {showPrayers&&<Communion/>}

        </>
    )
}

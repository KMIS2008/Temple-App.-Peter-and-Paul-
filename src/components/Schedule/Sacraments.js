
import {Container, List} from './Schedule.styled';
import {TitleChapter} from './Schedule.styled';
import { Link } from "react-router-dom";



export const Sacraments = () => {

  return (
    <Container>

      <TitleChapter>Церковні таїнства. </TitleChapter>

      <p>
      В Храмі апостолів Петра і Павла здійснюються усі духовні потреби віруючих.
      </p>
      <p>
      Відбуваються Церковні Таїнства:
      </p>

      <List>
        <li>
           <Link to="/christening">
              1. Хрещення та Миропомазання - щоденно за попереднім записом;
           </Link>          
        </li>

        <li>
           <Link to="/confession">
              2. Покаяння (Сповідь) - о 9:15 в дні служіння Літургії у неділю і великі церковні свята;
           </Link>          
        </li>

        <li>
           <Link to='/communion'>
             3. Причастя - під час Літургії у неділі і великі церковні свята;
           </Link>          
        </li>

        <li>
           <Link to='/wedding'>
             4. Вінчання - за попереднім записом;
           </Link>          
        </li>

        <li>
           <Link to='/gathering'>
              5. Соборування - один раз на рік у Великій піст.
           </Link>          
        </li>
      </List>

      <p>
      В Храмі також правляться церковні треби: сорокоусти, молебні, панахиди і похорони.
      </p>
      <p>
      Здійснюються освячення предметів культу, осель та транспорту, робочих приміщень.
      </p>
      <p>
      Для запису і отримання довідок будь ласка звертайтеся до протоієрея Олега Олексюка за телефоном +38 098 273 47 47.
      </p>

    </Container>
  );
};
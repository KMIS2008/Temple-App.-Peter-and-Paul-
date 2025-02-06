import React, { useState, useEffect } from "react";
import { Tittle } from "components/Title/Title";
import { scheduleOfServices } from "../ScheduleOfServices/ScheduleOfServices";
import {Container, List} from './Schedule.styled';
import {TitleChapter} from './Schedule.styled';
import { Link } from "react-router-dom";

export const ServiceHighlighter = ({handleClick=()=>{}}) => {
  const [currentService, setCurrentService] = useState(null);
  const [nextService, setNextService] = useState(null);

  const updateServices = () => {
    const now = new Date();

    // Сортируем богослужения по времени
    const sortedServices = scheduleOfServices.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

    let current = null;
    let next = null;

    for (const service of sortedServices) {
      const serviceTime = new Date(`${service.date}T${service.time}`);
      const serviceEndTime = new Date(serviceTime.getTime() + 2 * 60 * 60 * 1000); // Длительность 2 часа

      if (serviceTime <= now && now < serviceEndTime) {
        current = service; // Текущее богослужение
        break;
      } else if (serviceTime > now) {
        next = service; // Следующее богослужение
        if (!current) break; // Если текущего нет, выбираем первое следующее
      }
    }

    setCurrentService(current);
    setNextService(next);
  };

  useEffect(() => {
    updateServices(); // Обновляем при загрузке
    const interval = setInterval(updateServices, 60 * 1000); // Обновляем каждую минуту
    return () => clearInterval(interval); // Очищаем таймер
  }, []);

  return (
    <Container>
      <Tittle title="Богослужіння" handleClick={handleClick}/>

      <TitleChapter>Розклад богослужінь</TitleChapter>

      <List>
        {scheduleOfServices.map((service) => {
          const isCurrent = currentService && currentService.id === service.id;
          const isNext = nextService && nextService.id === service.id;

          return (
            <li
              key={service.id}
              style={{
                padding: "10px",
                borderRadius: "5px",
                margin: "5px 0",
                backgroundColor: isCurrent
                  ? "green"
                  : isNext
                  ? "orange"
                  : "transparent",
                color: isCurrent || isNext ? "white" : "black",
              }}
            >
             {service.date} <strong>{service.title}</strong> - {service.time}

              {isCurrent && " (Триває зараз)"}
              {isNext && " (Наступне)"}
            </li>
          );
        })}
      </List>

      <TitleChapter>Церковні таїнства. </TitleChapter>

      <p>
      В Храмі апостолів Петра і Павла здійснюються усі духовні потреби віруючих.
      </p>
      <p>
      Відбуваються Церковні Таїнства:
      </p>

      <Link to="/christening">
      1. Хрещення та Миропомазання - щоденно за попереднім записом;
      </Link>
    
      <Link to="/confession">
      2. Покаяння (Сповідь) - о 9:15 в дні служіння Літургії у неділю і великі церковні свята;
      </Link>

      <Link to='/communion'>
      3. Причастя - під час Літургії у неділі і великі церковні свята;
      </Link>
      
      <p>
      4. Вінчання - за попереднім записом;
      </p>
      
      <p>
      5. Соборування - один раз на рік у Великій піст.
      </p>
      
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
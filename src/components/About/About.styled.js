import styled from "styled-components";

export const Container=styled.div`
/* padding: 20px 20px; */
max-width: 1440px;
margin-bottom: 60px;

@media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
}
`

export const Title =styled.h2`
margin-bottom: 20px;
margin-top: 20px;
text-align: center;
`

export const Text=styled.p`
padding-bottom: 20px;
text-align: justify;
font-size: 16px;

@media (min-width: 768px) {
    font-size: 20px;
}

@media (min-width: 1440px) {
    font-size:24px;
}
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Опционально, добавляет закругленные углы */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */

              opacity: 0; /* Начальная прозрачность */
  transform: scale(0.6); /* Начальный размер */
  animation: fadeInScale 2500ms ease-in-out forwards; /* Анимация */
  
  @keyframes fadeInScale {
    0% {
      opacity: 0;
      transform: scale(0.6);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

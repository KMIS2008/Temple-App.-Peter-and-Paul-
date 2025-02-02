import styled from "styled-components";

export const ContainerHome= styled.div` 
padding: 20px 20px;
background:rgb(217, 242, 166);
`

export const ContainerMainBanner=styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 812px;
background: ${p=>p.theme.colors.green};

@media (min-width: 768px) {
    height: 1024px;
}

@media (min-width: 1440px) {
    height: 800px;
}
`

export const Image = styled.img`
margin: 0 auto;
  margin-bottom: 60px;
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Опционально, добавляет закругленные углы */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3), 
              -5px 5px 15px rgba(0, 0, 0, 0.2); /* Тени вправо, вниз и влево */
              
  opacity: 0; /* Начальная прозрачность */
  transform: scale(0.6); /* Начальный размер */
  animation: fadeInScale 3s ease-in-out forwards; /* Анимация */
  
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
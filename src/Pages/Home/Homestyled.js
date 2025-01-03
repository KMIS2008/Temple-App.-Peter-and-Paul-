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
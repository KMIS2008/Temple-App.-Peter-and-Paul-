import styled from "styled-components";

export const Container=styled.div`
/* padding: 20px 20px; */
max-width: 1440px;

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


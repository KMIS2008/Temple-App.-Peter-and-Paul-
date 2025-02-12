import styled from "styled-components";

export const Container=styled.div`
width: 70%;
margin: 0 auto;  
padding:20px 40px;
background-color: ${p=>p.theme.colors.morning};
border-radius: 20px;
border: 5px solid ${p=>p.theme.colors.red}
`
import styled from "styled-components"
import rose from '../../images/ukraine.jpg';

export const Container=styled.div`
width: 70%;
margin: 0 auto;  
padding: 0 40px;
background-color: rgba(255, 255, 0, 0.5);

border: 80px solid transparent;
border-image: url(${rose}) 20% round; 
border-image-outset:40px;

`

import styled from "styled-components";

export const ContainerSVG=styled.div`
display: flex;
position: absolute;
top: 50%;
align-items: center;
width: 30px;
height: 30px;
background: white;
transform: translateY(-50%);
cursor: pointer;
z-index: 1000;
border-radius: 5px;

@media (min-width: 768px) {
    width: 50px;
    height: 50px;
}
`

export const SVG=styled.svg`
display: block;
margin: 0 auto;
width: 20px;
height: 20px;
`
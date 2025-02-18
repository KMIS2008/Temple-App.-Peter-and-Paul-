import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 60px;
font-size: 24px;
`

export const List=styled.ul`
list-style: none;
`

export const TitleChapter=styled.h3`
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
font-size: 30px;
`

export const Item = styled.li`
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
  color: ${({ $color }) => $color || "black"};

  ${({ $flex }) =>
    $flex &&
    `
      display: flex;
      justify-content: space-between;
    `}
`;

export const Svg = styled.svg`
margin-right: 0;
margin-left: auto;

`
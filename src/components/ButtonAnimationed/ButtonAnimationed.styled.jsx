import styled from "styled-components";

export const ButtonStyled = styled.button`
  width:250px;
  height:50px;
  margin-top:30px;
  font-size:24px;
  color:white;
  background-color:rgb(50,50,46);
  transition:all 0.1s;
  border: none;
  position:relative;
  z-index:1;
  &:hover {
    transform: translate(8px, 8px);
  }
  @media (max-width: 500px) {
      left:-4px;
    }
`


export const ButtonBorder = styled.div`
  width:248px;
  height:48px;
  box-shadow: 0 0 0 2px rgb(50,50,46,.9);
  position:relative;
  z-index:0;
  top:-40px;
  left:10px;
  @media (max-width: 500px) {
      left:4px;
    }
`
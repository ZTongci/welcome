import styled from "styled-components";

export const MainTitle = styled.h1`
    font-size: 600%;
    letter-spacing: 6px;
    color: rgb(50,50,46);
    font-weight: bold;
    margin: 5% 0% 2% 0%;
    line-height:50%;
   
    @media (max-width: 1000px) {
        margin: 20% 0% 2% 0%;
      }
`

export const SubTitle = styled.h2`
    margin-bottom: 5%;
    font-size: 50px;
    line-height: 80%;
    margin: 0 10% 10%;
    @media (max-width: 1000px) {
        margin: 0% 10% 7%;
    }
`
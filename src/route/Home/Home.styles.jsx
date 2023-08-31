import styled, {keyframes} from "styled-components";

const verticalMove = keyframes `
from {
    top: 45%;
  }
  to {
    top: 47%;
  }
`

const verticalSmallMove = keyframes `
from {
    top: 65%;
  }
  to {
    top: 67%;
  }
`

export const AllPage = styled.div`
    margin: 0 10%;
    text-align: center;
`

export const HeroSection = styled.div`
    height: 140vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        transform: scale(0.9);
        height: 100%;
      }

`

export const MainTitle = styled.h1`
    margin: 30% 0% 0% 0%;
    font-size: 400%;
    letter-spacing: 1px;
    font-family: 'Lemonada', cursive;
    color: rgb(50,50,46,.9);
    font-weight: bold;

    @media (max-width: 1000px) {
        margin: 20% 0% 2% 0%;
      }
`

export const SubTitle = styled.h2`
    margin-bottom: 5%;
    font-size: 70px;
    line-height: 80%;
    color: rgb(50,50,46,.8);

    @media (max-width: 1000px) {
        margin: 0% 0% 7% 0%;
      }
`


export const TitleContent = styled.h2`
    font-size: 40px;
    color: rgb(50,50,46,0.6);
    line-height: 100%;
`

export const MyImage = styled.img`
    position: relative;
    z-index:100;
    height: 30%;
    margin-top: 13%;
    @media (max-width: 1000px) {
        height: 400px;
        margin-top: 10%;
      }
    `

export const CloudImage = styled.img`
    position: absolute;
    z-index:99;
    top:45%;
    height: 45%;
    margin-top: 13%;
    transform: translateY(-10%);
    animation: 6s ease-in-out 0s infinite alternate none running ${verticalMove};
    @media (max-width: 1000px) {
        height: 400px;
        margin-top: 10%;
        top:65%;
    animation: 6s ease-in-out 0s infinite alternate none running ${verticalSmallMove};
        }

`

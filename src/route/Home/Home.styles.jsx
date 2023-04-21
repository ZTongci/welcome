import styled from "styled-components";


export const AllPage = styled.div`
    margin: 0 10%;
    text-align: center;
`

export const HeroSection = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        transform: scale(0.9);
        height: 100%;
      }

    

`

export const MainTitle = styled.h1`
    margin: 50% 0% 0% 0%;
    font-size: 400%;
    letter-spacing: 6px;
    font-family: 'Lemonada', cursive;
    color: rgb(50,50,46);
    font-weight: bold;
    @media (max-width: 1000px) {
        margin: 20% 0% 2% 0%;
      }
`

export const SubTitle = styled.h2`
    margin-bottom: 5%;
    font-size: 70px;
    line-height: 80%;
    @media (max-width: 1000px) {
        margin: 0% 0% 7% 0%;
      }
`


export const TitleContent = styled.h2`
    font-size: 40px;
    color: rgb(50,50,46,0.85);
    line-height: 100%;
`

export const MyImage = styled.img`
    position: relative;
    z-index:100;
    height: 35%;
    margin-top: 10%;
    @media (max-width: 1000px) {
        height: 400px;
        margin-top: 10%;
      }
    `

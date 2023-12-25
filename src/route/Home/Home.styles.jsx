import styled ,{keyframes} from "styled-components";


export const AllPage = styled.div`
    width:1280px;
    @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
      width:350px;
    }

`

export const HeroWrap = styled.div`
    height: 100vh;
    width: 98%;
    position:absolute;
    top:2.5%;
    left:1%;
    background-color: #f9efe7;
`

export const HeroSection = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position:relative;
    left:0px;
    text-align:left;
    margin-left: 0;
    margin-right: auto;
`

export const MainTitle = styled.h1`
    margin: 18% auto 0% auto;
    font-size: 550%;
    letter-spacing: 1px;
    font-family: 'Lemonada', cursive;
    color: rgb(50,50,46);
    font-weight: bold;
    position:relative;
    right:10px;
    @media (max-width: 500px) {
      font-size: 180%;
      right:5px;
    }
`

export const SubTitle = styled.h2`
    margin-bottom: 5%;
    font-size: 70px;
    line-height: 80%;
    color: rgb(50,50,46);
    @media (max-width: 500px) {
      font-size: 34px;
      position:relative;
      left:-4px;
    }
    @media (min-width: 2024px) {
      font-size: 70px;
    }
`

export const SubTitleAnimation1 = styled.div`
    height: 20px;
    background-color: #ffe872;
    margin-right: 4px;
    position: absolute;
    top: 20px;
    left: 4%;
    right: 0%;
    width:0px;
    ${(({progress})=>`width:${progress}px;`)}
    @media (max-width: 500px) {
      height: 10px;
      ${(({progress})=>`width:calc(${progress}px / 2.1);`)}
      left: -2px;
      top: 10px;
    }
    
`

export const SubTitleAnimation2 = styled.div`
    height: 20px;
    background-color: #ffe872;
    margin-right: 4px;
    position: absolute;
    top: 20px;
    left: 500px;
    right: 0%;
    width:0;
    ${(({progress})=>`width:${progress}px;`)}
    @media (max-width: 1000px) {
      left: 90px;
      top:80px;
      }
      @media (max-width: 500px) {
      height: 10px;
      ${(({progress})=>`width:calc(${progress}px / 2);`)}
      left: 240px;
      top: 10px;
    }
      
`


export const TitleContent = styled.h2`
    text-align:left;
    font-size: 30px;
    color: rgb(50,50,46,0.8);
    line-height: 100%;
    max-width:550px;
    @media (max-width: 500px) {
      font-size: 20px;
      position:relative;
      left:-4px;
    }

`



export const ScrollBlock = styled.div`
    width: 46px;
    height: 105px;
    display: inline-block;
    position: relative;
    bottom: -90%;
    left: 40%;
    overflow: hidden;
    transform: scale(1.3);
    z-index:1;
    @media (max-width: 500px) {
      bottom: -85%;
      transform: scale(.8);
    }
`


export const ScollText = styled.div`
    transform-origin: 0 0;
    text-transform: uppercase;
    font-weight: lighter;
    display: inline-block;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 46px;
    right: auto;
    transform: rotate(90deg);
    font-size:26px;
`

const linerAnimation = keyframes`
  0%,100% {height: 2px;}
  50% {height: 105px;}

`;


export const ScrollArrow = styled.div`
    width: 1px;
    height: 105px;
    transform-origin: 50% 100%;
    background-color: #000;
    display: inline-block;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: auto;
    animation:${linerAnimation} 3s Linear 1s infinite;
`

export const SummaryWrap = styled.div`
    right:0px;
    height: 300vh;
    width: 100%;
    position:absolute;
    top:110vh;
    background-color: #fff;
    @media (max-width: 1000px) {
      height: 450vh;
      margin-bottom: 5%;
    }
    @media (max-width: 500px) {
      height: 600vh;
      /* margin-bottom: 5%; */
    }
`
export const WorkWrap = styled.div`
    height: 50vh;
    position:relative;
    background-color: #f9efe7;
    width: 98%;
    left:0%;
    @media (max-width: 1000px) {
      height: 50vh;
      bottom:40vh;
      z-index:0;
    }
    @media (max-width: 500px) {
      height: 60vh;
      bottom:30vh;
      z-index:0;
    }

`
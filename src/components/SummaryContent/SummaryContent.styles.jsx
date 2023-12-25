import { Link } from "react-router-dom";
import styled from "styled-components";



export const Box = styled.div`
    height: 482px;
    position: relative;
    width: 1280px;
    margin-bottom: 20%;
    @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
        width:350px;
        margin-bottom: 500px;
    }
`

export const Group = styled.div`
    height: 482px;
    position: relative;
    top: 120px;
    width: 1280px;
    display:flex;
    justify-content:space-between;
    transition: all 0.1s;
    @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
        width:350px;
    }
`

export const RightContent = styled.div`
    width:630px;
    transition: all .5s;
    position: relative;
    @media (max-width: 1316px) {
        transform:scale(0.7);
        top:10%;
      }
    @media (max-width: 1000px) {
        transform:scale(0.7) translate(-805px,150px);
    }
`

export const LeftContent = styled.div`
    width:550px;
`

export const IcArrowForward = styled.img`
    height: 15px;
    left: 1245px;
    position: absolute;
    top: 467px;
    width: 35px;
`

export const HintMessage = styled.p`
    color:#B7B4B9;
    height: 15px;
    left: 1050px;
    position: absolute;
    top: 458px;
    font-size:24px;
    font-weight: 100;
    width:200px;
    transition: all 1s;
`

export const Overlap = styled(Link)`
    height: 467px;
    left: 576px;
    position: absolute;
    top: 0;
    width: 544px;
`

export const DotPattern = styled.img`
    height: 188px;
    left: 160px;
    position: absolute;
    top: 279px;
    width: 101px;
`

export const ChatApp = styled.img`
    height: 446px;
    left: 181px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 523px;
    transition:all 0.1s;
    &:hover{
        transform:translate(10px,-10px)
    }
`
export const ButtonNB = styled.button`
    all: unset;
    box-sizing: border-box;
    height: 67px;
    left: 0;
    position: absolute;
    top: 367px;
    width: 211px;
    @media (max-width: 1000px) {
        margin-top: 350px;
    }
    
`
export const OverlapGroup = styled.div`
    height: 67px;
    position: relative;
    width: 209px;
`



export const TextWrapper = styled.div`
    color: #ffffff;
    font-family: "Nunito Sans", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 38px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 16px;
`

export const OverlapWrapper = styled.div`
    height: 28px;
    left: 312px;
    position: absolute;
    top: 167px;
    width: 73px;
`

export const ConceptWrapper = styled.div`
    background-color: #f9efe7;
    height: 28px;
    position: relative;
    width: 71px;
`

export const ConceptDiv = styled.div`
    color: var(--text-color);
    font-family: "Muli-Bold", Helvetica;
    font-size: 13px;
    font-weight: 700;
    left: 10px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 6px;
`
export const OverlapGroupWrapper = styled.div`
    height: 28px;
    left: 134px;
    position: absolute;
    top: 167px;
    width: 164px;
`


export const WebflowDevelopmentWrappe = styled.div`
    background-color: #f9efe7;
    height: 28px;
    position: relative;
    width: 162px;
`

export const Group2 = styled.div`
    height: 28px;
    left: 0;
    position: absolute;
    top: 167px;
    width: 120px;
`

export const WebsiteDesignWrapper = styled.div`
    background-color: #f9efe7;
    height: 28px;
    position: relative;
    width: 118px;
`

export const Discribe = styled.p`
    color: var(--text-color);
    font-family: var(--paragraph-font-family);
    font-size: 30px;
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    left: 0;
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: 30px;
    position: absolute;
    top: 227px;
    width: 445px;
    text-align:left;
    @media (max-width: 1000px) {
        font-size: 24px;
        width:350px;
        margin-top: 350px;
    }
`

export const TextWrapper2 = styled.div`
    color: var(--text-color);
    font-family: var(--h1-font-family);
    font-size: 600%;
    font-style: var(--h1-font-style);
    font-weight: var(--h1-font-weight);
    left: 0px;
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    position: absolute;
    top: 41px;
    margin-bottom: 500px;
    text-align:left;
    @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
        font-size: 350%;
        left: 0px;
        width:380px;
    }
`

export const LatestWork = styled.div`
    color: #b7b4b9;
    font-family: var(--h3-font-family);
    font-size: 200%;
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: absolute;
    left:0px;
    white-space: nowrap;
`  

export const Lable = styled.div`
    @media (max-width: 1000px) {
        width:350px;
        position:absolute;
        right:6px;
    }
`  

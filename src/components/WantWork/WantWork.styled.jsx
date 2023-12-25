import styled from "styled-components";

export const  StyledBox = styled.div`
  height: 10px;
  position: relative;
  bottom:40vh;
  width: 1280px;
  display:flex;
  justify-content:space-between;
  @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
        width:350px;
        bottom:80vh;
        /* margin-bottom: 500px; */
    }
    @media (max-width: 500px) {
        width:350px;
        margin-bottom: 0px;
        bottom:80vh;
    }

  & .group {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    height: 475px;
    width:550px;
    justify-content:flex-start;
    position:relative;
    transition: all .5s;
    left:2%;
    @media (max-width: 1316px) {
        left:17%;
      }
    @media (max-width: 1000px) {
        transform:scale(1) translate(-410px,100px);
        width:0;
    }
  }



  & .p {
    color: var(--text-color);
    font-family: var(--paragraph-font-family);
    font-size: 24px;
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    position: relative;
    bottom:40px;
    width: 448px;
    text-align: left;
    @media (max-width: 1000px) {
        width:350px;
    }
  }



  & .text-wrapper-2 {
    color: var(--text-color);
    font-family: var(--h1-font-family);
    font-size: 600%;
    font-style: var(--h1-font-style);
    font-weight: var(--h1-font-weight);
    left: 0px;
    letter-spacing: var(--h1-letter-spacing);
    line-height: 0.8;
    position: relative;
    top: -50px;
    /* margin-bottom: 500px; */
    text-align:left;
    width:500px;
    @media (max-width: 1316px) {
        font-size: 550%;
        width:1000px;
        font-weight: 500;
      }
    @media (max-width: 1000px) {
        font-size: 350%;
        left: 0px;
        top: 0px;
        width:380px;
    }
  }
`;

export const SubTitleAnimation1 = styled.div`
    height: 20px;
    background-color: #ffe872;
    margin-right: 4px;
    position: absolute;
    top: -5px;
    left: 16.2%;
    right: 0%;
    width:0;
    ${(({progress})=>`width:${progress}px;`)}
    @media (max-width: 1310px) {
      left: 0px;
      top:80px;
      ${(({progress})=>`width:calc(${progress}px / 1.5);`)}
      }
    @media (max-width: 1000px) {
      left: 120px;
      top:20px;
      width:86px;
      ${(({progress})=>`width:calc(${progress}px / 1.7);`)}
      }
      @media (max-width: 500px) {
      height: 12px;
      ${(({progress})=>`width:calc(${progress}px / 1.7);`)}
      left: 120px;
      top: 26px;
    }
    
`
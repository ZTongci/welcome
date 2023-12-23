import styled from "styled-components";

export const  StyledBox = styled.div`
  height: 475px;
  position: relative;
  width: 1280px;
  display:flex;
  justify-content:space-between;
  @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
        width:350px;
        margin-bottom: 500px;
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

  & .text-wrapper {
    color: var(--text-color);
    font-family: var(--paragraph-font-family);
    font-size: 24px;
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: var(--paragraph-line-height);
    position: relative;
    width: 448px;
    text-align: left;
    @media (max-width: 1000px) {
        width:350px;
    }
  }

  & .div {
    color: var(--text-color);
    font-family: "Muli-Bold", Helvetica;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
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
    width: 448px;
    text-align: left;
    @media (max-width: 1000px) {
        width:350px;
    }
  }

  & .design {
    color: var(--text-color);
    font-family: "Muli-Bold", Helvetica;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }


  & .rectangle {
    background-color: var(--highlight);
    height: 28px;
    left: 156px;
    position: absolute;
    top: 39px;
    width: 100px;
  }

  & .text-wrapper-2 {
    color: var(--text-color);
    font-family: var(--h1-font-family);
    font-size: 600%;
    font-style: var(--h1-font-style);
    font-weight: var(--h1-font-weight);
    left: 0px;
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    position: relative;
    top: -50px;
    /* margin-bottom: 500px; */
    text-align:left;
    width:450px;
    @media (max-width: 1316px) {
        width:900px;
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
    top: 36px;
    left: 16.2%;
    right: 0%;
    width:0;
    ${(({progress})=>`width:${progress};`)}
    @media (max-width: 1310px) {
      left: 208px;
      top:36px;
      }
    @media (max-width: 1000px) {
      left: 120px;
      top:42px;
      width:86px;
      }
      @media (max-width: 500px) {
      height: 12px;
      width:86px;
      left: 120px;
      top: 50px;
    }
    
`
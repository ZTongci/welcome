import styled from "styled-components";
// -----------------------------Arrow Section-----------------------------

export const ArrowDiv = styled.div`
    padding:0px;
    margin: 10% 0%;
    @media (max-width: 1400px) {
        position: relative;
        top:50px;
        left:20px
      }
      @media (max-width: 1200px) {
        position: relative;
        top:50px;
        left:238px
      }
      @media (max-width: 992px) {
        margin:0;
        position: relative;
        top:20px;
        left:115px;
      }
      @media (max-width: 768px) {
        margin:0;
        position: relative;
        top:20px;
        left:25px;
      }
`

export const ArrowUl = styled.ul`
    width: 400px;
    padding:0px;
`

export const ArrowLi = styled.li`
    margin-bottom: 0px;
    display: flex;
    align-items: center;
`

export const YellowArrow = styled.i`
    font-size: 26px;
    margin-right: 10px;
    padding: 0px;
    color: #ffb727;

`

export const ArrowTitle = styled.strong`
    color: #5d6a75;
    margin-right: 10px;
    font-size: 30px;
`

export const ArrowContent = styled.span`
    color: #5d6a75;
    font-size: 25px;
    font-weight: 500;
    @media (max-width: 1200px) {
        font-size: 23px;
      }
`

// -----------------------------------------------------------------------
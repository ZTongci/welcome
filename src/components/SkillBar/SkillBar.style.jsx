import styled from "styled-components";



export const SkillTotal = styled.div`
    position: relative;
    bottom: 15%;
    right:10px;
    @media (max-width: 1400px) {
        position: relative;
        top:50px;
        left:10px
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
        left:105px;
      }
      @media (max-width: 768px) {
        margin:0;
        position: relative;
        top:20px;
        left:13px;
      }
      
`

export const ProgressBar = styled.div`
    padding: 10px 0;
    margin: 0 0 6px 0;
    display: block;
    font-weight: 700;
    background-color: #ffb727;
    ${(({progress})=>`width:${progress}`)}
`

export const SkillContent = styled.p`
    font-size: 25px;
    text-align: left;
    margin: 8px 0px;
    font-weight: 700;
    color: #5d6a75;
`
  

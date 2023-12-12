import styled from "styled-components";



export const SkillTotal = styled.div`
    position: relative;
    bottom: 14.5%;
    right:10px;
    @media (max-width: 1400px) {
        position: relative;
        top:50px;
        left:10px
      }
      @media (max-width: 1200px) {
        margin:5% 0;
        max-width:150%;
        width:150%;
        position: relative;
        top:40px;
        left:10px
      }
      @media (max-width: 992px) {
        margin:5% 0;
        position: relative;
        top:20px;
        left:8px;
        width:85%;
      }
      @media (max-width: 768px) {
        margin:5% 0;
        position: relative;
        top:20px;
        left:13px;
        width:95%;
      }
      
`
type progressType = {
  progress:string
}

export const ProgressBar = styled.div<progressType>`
    padding: 10px 0;
    margin: 0 0 6px 0;
    display: block;
    font-weight: 700;
    background-color: #ffb727;
    ${(({progress}:progressType)=>`width:${progress};`)}
`

export const SkillContent = styled.p`
    font-size: 25px;
    text-align: left;
    margin: 8px 0px;
    font-weight: 700;
    color: #5d6a75;
`
  

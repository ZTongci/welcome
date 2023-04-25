import styled from "styled-components";

export const ClientTotal = styled.div`
    width: 100%;
    position: relative;
    bottom: 8%;
    @media (max-width: 1400px) {
        position: relative;
        top:50px;
        left:20px
      }
      @media (max-width: 1200px) {
        position: relative;
        top:50px;
        left:20px
      }
      @media (max-width: 992px) {
        margin:0;
        position: relative;
        top:20px;
        left:20px;
        
      }
      @media (max-width: 768px) {
        margin:0;
        position: relative;
        top:20px;
        left:22px;
        width:95%;
      }

`
export const ClientDiv = styled.div`
    padding: 0px 20px 0px 3px;
    margin:0px 0px 0px 0px;
    position: relative;
    ${({ ContentTitle }) => ((ContentTitle=== "Projects:")|| (ContentTitle==="Advantage:"))&& 
    `left:11px;
    `};

    @media (max-width: 1200px) {
      max-width:150%;
      width:150%;
      ${({ ContentTitle }) => ((ContentTitle=== "Projects:")|| (ContentTitle==="Advantage:"))&& 
    `left:0px;`}
    }
    @media (max-width: 992px) {
        width:85%;
        margin:0;
        position: relative;
        top:20px;
        right:10px;
        padding: 0px 0px 0px 0px;
        ${({ ContentTitle }) => ((ContentTitle=== "Projects:")|| (ContentTitle==="Advantage:"))&& 
    `left:-10px;`}
      }

`

export const ClientTitle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    svg{
        font-size: 35px;
        ${({ IconColorHandle }) => `color: ${IconColorHandle}`};
    }

`


export const ClientCount = styled.span`
    font-weight: 900;
    margin:0 5%;
    font-size:35px;
    position:relative;
    top:5px;
`


export const ClientContent = styled.p`
    text-align:start;
    font-size:25px;
    color: rgb(50,50,46,0.6);
    line-height: 25px;
`

export const ClientContentStrong = styled.strong`
    font-size:30px;
    color: rgb(50,50,46,0.7);
`
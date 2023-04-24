import styled from "styled-components";



export const WhiteScreen = styled.div`
    background-color: white;
    position: relative;
    z-index: 1;
    opacity:0.99;
    -webkit-box-sizing: border-box;
    -mozbox-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px gray;
    padding: 0px;
    margin-bottom: 150px;
    border-radius:30px;
    @media (max-width: 1200px) {
      padding:50px 0px;
    }
`

export const MyImformation = styled.div`
    padding:0px;
    @media (max-width: 1400px) {
        position: relative;
        top:10px;
        transform:scale(0.83);
      }
      @media (max-width: 1200px) {
        transform:scale(1.0);
      }

    
`
export const MyImage = styled.img`
    width:528px;
    height:672px;
    position: relative;
    top:80px;
    margin-right: 100px;
    opacity:1;
    @media (max-width: 1400px) {
        margin:auto;
      }
    @media (max-width: 1200px) {
        position: static;
        margin:auto;
      }

`


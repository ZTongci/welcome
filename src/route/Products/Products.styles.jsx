import styled from "styled-components"

const screenFullHeight = 500;
const screenWeight = (height)=>height*16/9;
const phoneWeight = (height)=>height*9/16;

export const WhiteScreen = styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    position: relative;
    z-index: 1;
    -webkit-box-sizing: border-box;
    -mozbox-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px gray;
    padding: 40px 0px;
    margin-bottom: 150px;
    border-radius:30px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;

    @media (max-width: 1200px) {
      padding:60px 0px;
    }
`
export const CategorContainer = styled.div`
    min-width: 20%;
    height: ${screenFullHeight}px;
    ${({isPhone})=>isPhone?`width:${phoneWeight(screenFullHeight)}px;`:`width:${screenWeight(screenFullHeight)}px;`}
    ${({isflex})=>isflex&& `min-width: 40%;height: 710px;width:${screenWeight(710)}px;`}
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 10px 10px 25px rgb(170,170,170,0.6);
    margin: 0 35px 70px;
    overflow: hidden;

    @media (max-width: 1326px) {
      height: ${screenFullHeight}px;
      ${({isPhone})=>!isPhone&&`width:${screenWeight(screenFullHeight)}px;min-width: 50%;`}
    }

    .background-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      @media (max-width: 924px) {
        ${({isPhone})=>!isPhone?`width:${screenWeight(400)}px;height: 400px;`:`width:${phoneWeight(450)}px;height: 450px;`}
      }

      @media (max-width: 680px) {
        ${({isPhone})=>!isPhone?`width:${screenWeight(250)}px;height: 250px;`:`width:${phoneWeight(300)}px;height: 300px;`}
      }
  
    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(1.15);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    }
  
 

    .category-body-container {
        height: 100px;
        padding: 0 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius:10px;
        box-shadow: 1px 1px 5px gray;
        background-color: white;
        opacity: 0.6;
        position: absolute;
    
        h2 {
          font-weight: 500;
          margin: 0 6px 0;
          font-size: 32px;
          color: #4a4a4a;
        }
    
        p {
          font-weight: 500;
          font-size: 20px;
        }
    }
  `
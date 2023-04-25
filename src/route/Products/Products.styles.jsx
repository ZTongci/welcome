import styled from "styled-components"

export const WhiteScreen = styled.div`
    background-color: white;
    position: relative;
    z-index: 1;
    opacity:0.99;
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

    justify-content: center;

    @media (max-width: 1200px) {
      padding:60px 0px;
    }
`
export const CategorContainer = styled.div`
    min-width: 10%;
    height: 470px;
    ${({isPhone})=>isPhone?`width:300px;`:`width:650px;`}
    // flex:1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 10px 10px 25px rgb(170,170,170,0.6);
    margin: 0 25px 50px;
    overflow: hidden;

    .background-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }
      @media (max-width: 720px) {
        
        .background-image {
          ${({isPhone})=>!isPhone&&`width:100%;height: 70%;`}
        }
      }
  
    &:hover {
      cursor: pointer;
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    }
  
 
  
    // &:first-child {
    //   margin-right: 25px;
    // }
  
    // &:last-child {
    //   margin-left: 15px;
    // }
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
        opacity: 0.8;
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
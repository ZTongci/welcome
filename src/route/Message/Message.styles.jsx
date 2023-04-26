import styled from "styled-components";





export const WhiteBackground = styled.div`
    backgroundColor: white;
    position: relative; 
    zIndex: 1;
    opacity:0.95;

`


export const Masthead = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 110%;
    padding-left: 10%;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.85);
      }
    .masthead-content {
        position: relative;
        max-width: 35rem;
        padding-top: 5rem;
        padding-bottom: 5rem;
        line-height: 250%;
    }
    .masthead-content h1, .h1 {
        font-size: 5.0rem;
        text-align: left;
        padding-top: 5rem;
        line-height: 80%;
        letter-spacing: -1px;
      }
      p {
        font-size: 2.5rem;

        strong {
            font-weight: 700;
          }
      }


      @media (min-width: 992px) {
        height: 100%;
        width: 95vw;
        min-height: 0;
        padding-bottom: 0;
        margin-top: 100px;
        
        &:before{
            transform: skewX(-9deg);
            transform-origin: top right;
        }
        .masthead-content {
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 2rem;
          }
          .masthead-content h1, .h1 {
            font-size: 5.0rem;
        }
          p {
            font-size: 2.0rem;
          }
        }
        @media (min-width: 1200px) {
          width: 75vw;
          .masthead-content {
              padding: 20px;
              text-align: center;
            }
        }
        @media (max-width: 992px) {
          .masthead-content {
            padding-top: 0px;
          }
          .masthead-content h1, .h1 {
            font-size: 4.0rem;
        }

        }
    
`
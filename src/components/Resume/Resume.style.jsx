import styled from "styled-components";

export const ConclutionTitle = styled.h3`
    font-size:40px;
`

export const MainTitle = styled.h4`
    line-height: 18px;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffb727;
    margin-bottom: 10px;
`

export const PeriorTitle = styled.h5`
    font-size: 25px;
    background: #eef0f2;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
`

export const ResumeItem = styled.div`
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #82909c;
    position: relative;

    
    ul {
        padding-left: 20px;
      }
    li {
        padding-bottom: 10px;
        font-size: 25px;
    }
    p{
        font-size: 25px;
    }
    &:last-child {
        padding-bottom: 0;
      }
    &::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        left: -9px;
        top: 0;
        background: #fff;
        border: 2px solid #82909c;
      }


`
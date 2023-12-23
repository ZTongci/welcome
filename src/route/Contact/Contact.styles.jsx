import styled from "styled-components";



export const WhiteScreen = styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    position: relative;
    z-index: 1;
    opacity:0.99;
    -webkit-box-sizing: border-box;
    -mozbox-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px gray;
    padding: 50px;
    margin-bottom: 150px;
    border-radius:30px;
    Label{
        font-size:30px;
    }
    input, textarea{
        -webkit-box-sizing: border-box;
        -mozbox-sizing: border-box;
        box-sizing: border-box;
        border-radius:10px;
    }
    a{
        font-size:25px;
    }
    width:900px;
    @media (max-width: 1000px) {
        width:450px;
    }
`
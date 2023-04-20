import styled from "styled-components";



export const RevertButton = styled.a`
    text-decoration: none;
    color: rgb(50,50,46,0.9);
    background-color:white;
    margin-top: 2%;
    border-color: white;
    border-radius:10px;
    box-shadow: 1px 1px 5px gray;
    &:hover{
        text-decoration: none;
        color: white;
        background-color:rgb(50,50,46,0.9);
    }
`

export const Content = styled.div`
    position: relative;
    top: 100px;
    -webkit-box-sizing: border-box;
    -mozbox-sizing: border-box;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    padding: 50px;
    font-family: "Lato", sans-serif;
    margin-bottom: 150px;
    border-radius:30px;
`
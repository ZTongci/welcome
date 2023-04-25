import styled, {css} from "styled-components";
import {Link} from "react-router-dom";




export const NavLabelLink = styled(Link)`
    font-size: 40px;
    text-align: center;
`

export const NavLabelToggle = styled(NavLabelLink)`
    padding-left:9.5%;
`


export const NavBarTotal = styled.nav`
    opacity: 0.95;
    position: relative;
    z-index:100;
    font-size: 30px;
    text-align: center;
    --bs-dropdown-link-active-bg: black;

`


export const Welcome = styled.h5`
    font-size: 50px;
`




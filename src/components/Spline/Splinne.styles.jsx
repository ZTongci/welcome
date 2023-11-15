import styled, {css} from "styled-components";
import Spline from '@splinetool/react-spline';

export const DodoSpline = styled(Spline)`
    height: 100px;
    position: fixed;
    z-index: -99;

    ${({UrlBackground})=>UrlBackground&&DodoSplineAfter}

    
`
const DodoSplineAfter = css`
&:after{
    transform: scale(1.5);
    content: "";
    background: white;
    opacity:0.35;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}
`

import styled from "styled-components";
import Spline from '@splinetool/react-spline';

export const DodoSpline = styled(Spline)`
    height: 100px;
    position: fixed;
    z-index: 0;
    &:after{
        content: "";
        background: white;
        opacity:0.6;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        
    }
`
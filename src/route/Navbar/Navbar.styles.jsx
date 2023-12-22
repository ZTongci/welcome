import styled, {css} from "styled-components";
import {Link} from "react-router-dom";




export const NavLabelLink = styled(Link)`
    font-size:40px;
    text-align: center;
`

export const NavLabel = styled.span`
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size:30px;
    font-weight:200;
    color: rgb(50,50,46,.99);
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
    padding: 72px 240px;
    @media (max-width: 1200px) {
        padding: 72px 120px;
      }
    @media (max-width: 750px) {
        padding: 72px 60px;
    }


`


export const Welcome = styled.h5`
    font-size: 50px;
`

export const NavLink = styled(Link)`
    display:  inline-block;
    margin:0px 0px 0px 50px;
    font-size: 30px;
    text-decoration:none;
    position: relative;
    z-index:99;
    font-weight: 500;

    &::after {
        content: ''; /* 必须设置 content 属性才能显示伪元素 */
        display: block; /* 将伪元素设置为块级元素，以便设置宽度和高度 */
        position: absolute; /* 设置绝对定位 */
        right: 0; /* 位于链接元素的左边 */
        bottom: 16px; /* 距离链接元素底部的距离，可以根据需要进行调整 */
        width: 100%; /* 宽度与链接元素相同 */
        height: 8px; /* 伪元素的高度，即显示的颜色条的高度 */
        transition: height 0.3s ease; /* 添加过渡效果，使颜色条在变化时平滑移动 */
        background-color: #ffe872; /* 伪元素的背景颜色 */
        z-index:-1;
}
    /* 鼠标悬停时改变伪元素的位置 */
    &:hover::after {
        height: 20px;
        z-index:0px;
    }
`




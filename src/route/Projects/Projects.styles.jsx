import styled from "styled-components"


export const HeroWrap = styled.div`
    height: 68vh;
    width: 98%;
    position:absolute;
    top:2.5%;
    left:1%;
    background-color: #f9efe7;
    `

export const AllPage = styled.div`
    width:1280px;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    margin-bottom: 20%;
    @media (max-width: 1316px) {
        width:900px;
      }
    @media (max-width: 1000px) {
      width:350px;
    }

`

export const Discribe = styled.p`
    color: var(--text-color);
    font-family: var(--paragraph-font-family);
    font-size: 40px;
    font-style: var(--paragraph-font-style);
    font-weight: var(--paragraph-font-weight);
    letter-spacing: var(--paragraph-letter-spacing);
    line-height: 30px;
    position: relative;
    width: 900px;
    bottom: 80px;
    @media (max-width: 1316px) {
        width:900px;
        top: 86px;
        font-size: 32px;
      }
    @media (max-width: 1000px) {
        font-size: 24px;
        width:350px;
    }
`

export const TextWrapper2 = styled.div`
    color:rgb(50,50,46);
    font-family: var(--h1-font-family);
    font-size: 900%;
    font-style: var(--h1-font-style);
    font-weight: var(--h1-font-weight);
    letter-spacing: var(--h1-letter-spacing);
    line-height: var(--h1-line-height);
    position: relative;
    bottom: 20px;
    @media (max-width: 1316px) {
        font-size: 800%;
        width:900px;
        line-height:50%;
        top: 70px;
      }
    @media (max-width: 1000px) {
        font-size: 350%;
        width:400px;
    }
`

export const LatestWork = styled.div`
    color: #b7b4b9;
    font-family: var(--h3-font-family);
    font-size: 150%;
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    position: relative;
    top:50px;
    white-space: nowrap;
`  


export const NavLink = styled.a`
    display:  inline-block;
    font-size: 30px;
    text-decoration:none;
    position: relative;
    z-index:99;
    font-weight: 500;
    bottom: 50px;


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
    @media (max-width: 1316px) {
        top: 90px;
      }
`

export const ProductIMG = styled.img`
    height: auto;
    width: 928px;
    /* object-fit: cover; */
    position: relative;
    top: 0;
    transition:all 0.1s;
    /* &:hover{
        transform:translate(10px,-10px)
    } */
    @media (max-width: 1316px) {
        top: 90px;
      }
    @media (max-width: 900px) {
        height: auto;
        width: 100%;
    }
`
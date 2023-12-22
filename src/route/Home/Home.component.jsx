import React from "react";
import MessageContent from "../../components/MessageContent/MessageContent.component"

import MessageCotents from "./MessageContents.json"

import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import { useEffect, useState } from "react";


import { AllPage, HeroWrap, HeroSection, MainTitle, SubTitle, SubTitleAnimation1, SubTitleAnimation2, TitleContent, ButtonStyled, ButtonBorder,ScrollBlock,ScrollArrow,ScollText} from "./Home.styles"

function Home() {
    const { messageJson } = MessageCotents;

    // ---------------标题黄条动画---------------
    const [progressNumber, setProgressNumber] = useState(0);
    const yellowChangeHandle = (e) => {
        const scrollTop = () => Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        const position = scrollTop();
        if (position >= 0) {
            countNumberAnimation(180);
        }
    }
    const countNumberAnimation = (targetNum) => {
        let currNum = 0;
        let interval = setInterval(function () {
            setProgressNumber(currNum)
            currNum++;
            if (currNum === targetNum + 1) {
                clearInterval(interval);
            }
        }, 2);
    }
    useEffect(
        () => {
            window.addEventListener("scrollend", yellowChangeHandle);
            return () => {
                window.removeEventListener("scrollend", yellowChangeHandle);
            }
        }, []);





    return (
        <div>
            <HeroWrap>                    
                <ScrollBlock>
                    <ScrollArrow/>
                    <ScollText>scoll</ScollText>
                </ScrollBlock></HeroWrap>
            <AllPage>
                <HeroSection>
                    <Pulse>
                        <MainTitle>Hi, I’m Tongci,</MainTitle>
                    </Pulse>
                    <Zoom>
                        <SubTitleAnimation1 progress={`${progressNumber}px`}/>
                        <SubTitleAnimation2 progress={`${progressNumber}px`} />
                        <SubTitle>FullStack Developer and Designer.</SubTitle>
                        <TitleContent >I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.</TitleContent>
                    </Zoom>
                    <ButtonStyled onClick={yellowChangeHandle}>see my work</ButtonStyled>
                    <ButtonBorder />

                </HeroSection>


                <div>
            {messageJson.map(
                element => <MessageContent buttonLink={element.buttonLink} content={element.content} />)}
            </div>
            </AllPage>
        </div>
    );
}

export default Home;
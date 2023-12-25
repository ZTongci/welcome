import { Fragment } from "react";
import SummaryContent from "../../components/SummaryContent/SummaryContent.cmponent"
import ButtonAnimationed from "../../components/ButtonAnimationed/ButtonAnimationed.component";
import WhatDo from "../../components/WhatDo/WhatDo.component";
import WantWork from "../../components/WantWork/WantWork.component"

import ChatAppIMG from "../../image/summary/chatapp.png";
import TeamMockupIMG from "../../image/summary/TeamMockup.png";
import YouTouchIMG from "../../image/summary/youtouchHome.png";

import MessageCotents from "./MessageContents.json"

import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import { useEffect, useState } from "react";


import { AllPage, HeroWrap, HeroSection, MainTitle, SubTitle, SubTitleAnimation1, SubTitleAnimation2, TitleContent, ScrollBlock,ScrollArrow,ScollText,SummaryWrap,WorkWrap} from "./Home.styles"

function Home() {
    const { messageJson } = MessageCotents;

    // ---------------标题黄条动画---------------
    const [progressNumber, setProgressNumber] = useState(0);
    const yellowChangeHandle = () => {
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
        }, 1);
    }
    useEffect(
        () => {
            yellowChangeHandle();
            window.addEventListener("scrollend", yellowChangeHandle);
            return () => {
                window.removeEventListener("scrollend", yellowChangeHandle);
            }
        }, []);

    return (
        <Fragment>
            <HeroWrap>                    
                <ScrollBlock>
                    <ScrollArrow/>
                    <ScollText>scoll</ScollText>
                </ScrollBlock>
            </HeroWrap>
            <AllPage>
                <HeroSection>
                    <Pulse>
                        <MainTitle>Hi, I’m Tongci,</MainTitle>
                    </Pulse>
                    <Zoom>
                        <SubTitleAnimation1 progress={`${progressNumber}`}/>
                        <SubTitleAnimation2 progress={`${progressNumber}`} />
                        <SubTitle>FullStack Developer and Designer.</SubTitle>
                        <TitleContent >I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website, send me an email. If we are a good fit, I will give you a time and cost estimate.</TitleContent>
                    </Zoom>
                    <ButtonAnimationed title={"see my work"}/>
                </HeroSection>

            </AllPage>
            <SummaryWrap/>
            <SummaryContent firstTitle={"LATEST WORK"} secondTitle={"It SES website"}  tech={"React Development"}
            demonstration={"Across a 16-page project, I merged IT designs with 3D effects as per the client's vision. Using React, I coded the site meticulously. Emphasizing the client's values, it garnered highly positive feedback."}
            projectImg={YouTouchIMG} router={"it-ses"}/>
            <SummaryContent firstTitle={"LATEST WORK"} secondTitle={"Team App website"}  
            demonstration={"Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting."}
            projectImg={TeamMockupIMG} router={"team-app"}/>
            <SummaryContent firstTitle={"LATEST WORK"} secondTitle={"Chat App website"}  
            demonstration={"This is a homepage design and build for a concept project – a chat application. I have designed the page firstthen later built a responsive page in Webflow."}
            projectImg={ChatAppIMG} router={"chat-app"}/>
            <WhatDo progress={progressNumber}/>
            <WorkWrap /> 
            <WantWork progress={progressNumber}/>

        </Fragment>
    );
}

export default Home;
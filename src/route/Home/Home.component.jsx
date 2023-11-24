import React from "react";
import MessageContent from "../../components/MessageContent/MessageContent.component"
import meImg from "../../image/me2.png";
import could from "../../image/cloud.png";

import MessageCotents from "./MessageContents.json"

import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';


import { AllPage, HeroSection, MainTitle, SubTitle, TitleContent, MyImage, CloudImage } from "./Home.styles"

function Home() {
    const { messageJson } = MessageCotents;
    return (
        <AllPage>
            <HeroSection>
                <Pulse>
                    <MainTitle>I'm Tongci.</MainTitle>
                </Pulse>
                <Zoom>
                    <SubTitle>a programmer and designer.</SubTitle>
                    <TitleContent>I love what I do. Design isn’t just my job, it’s my life. My clients’ passion fuels my creativity, inspires my ideas, and drives me to pursue the extraordinary.</TitleContent>
                </Zoom>
                <MyImage src={meImg} alt="TongCi-Image" />
                <CloudImage src={could} alt="Tcould-Image" />
            </HeroSection>
            <div>
            {messageJson.map(
                element => <MessageContent buttonLink={element.buttonLink} content={element.content} />)}
            </div>
        </AllPage>
    );
}

export default Home;
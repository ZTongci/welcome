import React from "react";
import meImg from "../../image/hero-me.png";
import me from "../../image/me-about.JPG";
import Pulse from 'react-reveal/Pulse';
import TitleSection from "../../components/TitleSection/TitleSection.component"

import { MyImformation, MyImage, WhiteScreen } from "./AboutMe.styles";

import ArrowMessage from "../../components/ArrowMessage/ArrowMessage.component";
import ToClient from "../../components/ToClient/ToClient.component";
import SkillBar from "../../components/SkillBar/SkillBar.component";
import Resume from "../../components/Resume/Resume.component";
import Zoom from 'react-reveal/Zoom';

function AboutMe() {

  return (
    <Zoom>
      <TitleSection MainTitileHandle="About me" SubTitleHandle="Me Introducing My Experience, Skills, and Achievements." />


      <WhiteScreen>
        <div className="container">

          <div className="row" >
            <MyImage src={me} alt="myImg" className="col-lg-7 " />
            <MyImformation className="col-lg-6 ">
              <ArrowMessage />
              <ToClient />
              <SkillBar />
            </MyImformation>
          </div>


        </div>
      </WhiteScreen>
      <TitleSection MainTitileHandle="My Resume" SubTitleHandle="My Work Experience, Education Background, and Skills." />
      <WhiteScreen>
        <Resume />
      </WhiteScreen>
    </Zoom>
  );
}

export default AboutMe;
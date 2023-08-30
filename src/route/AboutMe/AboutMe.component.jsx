import React,{Fragment} from "react";
import me from "../../image/me-about.JPG";
import TitleSection from "../../components/TitleSection/TitleSection.component"

import { MyImformation, MyImage, WhiteScreen } from "./AboutMe.styles";

import ArrowMessage from "../../components/ArrowMessage/ArrowMessage.component";
import ToClient from "../../components/ToClient/ToClient.component";
import SkillBar from "../../components/SkillBar/SkillBar.component";
import Resume from "../../components/Resume/Resume.component";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function AboutMe() {
  var isAnimationed = false;

  const [DesignNumber, setDesignNumber] = useState(0);
  const [FrontNumber, setFrontNumber] = useState(0);
  const [BackendNumber, setBackendNumber] = useState(0);

  const [HappyNumber, setHappyNumber] = useState(0);
  const [ProjectsNumber, setProjectsNumber] = useState(0);
  const [ExperienceNumber, setExperienceNumber] = useState(0);
  const [AdvantageNumber, setAdvantageNumber] = useState(0);

  const SkillDatas = [
    { skillContent: `Design ${DesignNumber}%`, percentage: DesignNumber },
    { skillContent: `Front develop ${FrontNumber}%`, percentage: FrontNumber },
    { skillContent: `Backend develop ${BackendNumber}%`, percentage: BackendNumber }
  ];

  const ClientDatas = [
    { iconClass: "fa-regular fa-face-smile", iconColor: "#20b38e", count: HappyNumber, contentTitle: "Happy Clients:", content: "The current satisfaction rate of all clients is 100%." },
    { iconClass: "fa-solid fa-list-check", iconColor: "#8a1ac2", count: ProjectsNumber, contentTitle: "Projects:", content: "Total number of projects undertaken in my main and side careers." },
    { iconClass: "fa-regular fa-clock", iconColor: "#2cbdee", count: ExperienceNumber, contentTitle: "Years of Experience:", content: "Although I have limited experience, I am able to adapt to any project." },
    { iconClass: "fa-solid fa-award", iconColor: "#ffb459", count: AdvantageNumber, contentTitle: "Advantage:", content: "I am proficient in programming for both front-end and back-end development using languages such as Flutter, Python, React, and Node." }
  ];


  const countNumberAnimation = (targetNum, name, speed) => {
    let currNum = 0;
    let interval = setInterval(function () {
      
      switch (name) {
        case ("Design"):
          setDesignNumber(currNum);
          break;
        case ("Front"):
          setFrontNumber(currNum);
          break;
        case ("Backend"):
          setBackendNumber(currNum);
          break;
        case ("Happy"):
          setHappyNumber(currNum);
          break;
        case ("Experience"):
          setExperienceNumber(currNum);
          break;
        case ("Advantage"):
          setAdvantageNumber(currNum);
          break;
        case ("Projects"):
          setProjectsNumber(currNum);
          break;
      }
      currNum++;
      if (currNum === targetNum + 1) {
        clearInterval(interval);
      }
    }, speed);
  }


  const scrollHandle = (e) => {
    const scrollTop = () => Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    const position = scrollTop();
    if (position >= 1) {
      // isAnimationed = true;
      countNumberAnimation(100, "Design", 2);
      countNumberAnimation(90, "Front", 2);
      countNumberAnimation(75, "Backend", 2);
      countNumberAnimation(5, "Happy", 40);
      countNumberAnimation(10, "Projects", 20);
      countNumberAnimation(2, "Experience", 100);
      countNumberAnimation(4, "Advantage", 50);
      
    }
  }



  useEffect(
    () => {
      window.addEventListener("scrollend", scrollHandle);
      window.addEventListener("touchend", scrollHandle);

    return () => {
      window.removeEventListener("scrollend", scrollHandle);
      window.removeEventListener("touchend", scrollHandle);}
  }, []);



  return (
    <Fragment>
    <Zoom>
      <TitleSection MainTitileHandle="About me" SubTitleHandle="Me Introducing My Experience, Skills, and Achievements." />
      </Zoom>
      <WhiteScreen>
        <Fade>
        <div className="container">
          <div className="row" >
            <MyImage src={me} alt="myImg" className="col-lg-7 " />
            <MyImformation className="col-lg-6 ">
              <ArrowMessage />
              <ToClient ClientDatas={ClientDatas} />
              <SkillBar SkillDatas={SkillDatas} />
            </MyImformation>
          </div>
        </div>
        </Fade>
      </WhiteScreen>
      <Zoom>
      <TitleSection MainTitileHandle="My Resume" SubTitleHandle="My Work Experience, Education Background, and Skills." />
      </Zoom>
      <WhiteScreen>
      <Fade>
        <Resume />
        </Fade>
      </WhiteScreen>
    
    </Fragment>
  );
}

export default AboutMe;
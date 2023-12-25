import ButtonAnimationed from "../ButtonAnimationed/ButtonAnimationed.component";
import {
  Box, Group, LeftContent, RightContent, IcArrowForward, HintMessage, Overlap, DotPattern, ChatApp, ButtonNB, OverlapGroup, TextWrapper, OverlapWrapper
  , ConceptWrapper, ConceptDiv, OverlapGroupWrapper, WebflowDevelopmentWrappe,
  Group2, WebsiteDesignWrapper, Discribe, TextWrapper2, Lable,
  LatestWork
} from "./SummaryContent.styles";
import { Fragment, useState } from "react";

import Fade from 'react-reveal/Fade';

const SummaryContent = ({ firstTitle, secondTitle, demonstration, projectImg, tech, router }) => {
  const [isHoverImage, setIsHoverImage] = useState(false);


  return (
    <Fade>
      <Box>
        <Group>
          <RightContent>
            {isHoverImage &&
              <Fragment>
                <HintMessage>see this project</HintMessage>
                <IcArrowForward
                  className="ic-arrow-forward"
                  alt="Ic arrow forward"
                  src="https://c.animaapp.com/Xz9tLC77/img/ic-arrow-forward-18px.svg"
                />
              </Fragment>
            }
            <Overlap to={`/projects/${router}`}>
              <DotPattern alt="Dot pattern" src="https://c.animaapp.com/Xz9tLC77/img/dot-pattern@2x.png" />
              <ChatApp onMouseOver={() => setIsHoverImage(true)} onMouseOut={() => setIsHoverImage(false)} alt="Chat app" src={projectImg} />
            </Overlap>
          </RightContent>
          <LeftContent>
            <ButtonNB>
              <OverlapGroup>
                <ButtonAnimationed title={"see this project"} router={router} />
              </OverlapGroup>
            </ButtonNB>
            <Lable>
              <OverlapWrapper>
                <ConceptWrapper>
                  <ConceptDiv>Concept</ConceptDiv>
                </ConceptWrapper>
              </OverlapWrapper>
              <OverlapGroupWrapper >
                <WebflowDevelopmentWrappe>
                  <ConceptDiv>{tech ? tech : "Webflow Development"}</ConceptDiv>
                </WebflowDevelopmentWrappe>
              </OverlapGroupWrapper >
              <Group2>
                <WebsiteDesignWrapper>
                  <ConceptDiv>Website Design</ConceptDiv>
                </WebsiteDesignWrapper>
              </Group2>
            </Lable>
            <Discribe>{demonstration}</Discribe>
            <TextWrapper2>{secondTitle}</TextWrapper2>
            <LatestWork>{firstTitle}</LatestWork>
          </LeftContent>
        </Group>
      </Box>
    </Fade>);
}

export default SummaryContent;
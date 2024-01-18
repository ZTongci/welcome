import { Fragment } from "react";
import {
  HeroWrap,
  AllPage,
  LatestWork,
  TextWrapper2,
  Discribe,
  NavLink,
  ProductIMG,
} from "./Projects.styles";
import { useParams } from "react-router-dom";
import { projectList } from "./Projects";

const Projects = () => {
  const { project } = useParams();
  const { title, url, demonstration, imgURL } = projectList[project];
  return (
    <Fragment>
      <HeroWrap />
      <AllPage>
        <LatestWork>PROJECT SHOWCASE</LatestWork>
        <TextWrapper2>{title}</TextWrapper2>
        <Discribe>{demonstration}</Discribe>
        <NavLink href={url} target="_blank" rel="noopener noreferrer">
          visit live site →
        </NavLink>
        <ProductIMG alt="Product-IMG" src={imgURL} />
        {projectList[project].imgURL2 && (
          <ProductIMG alt="Product-IMG2" src={projectList[project].imgURL2} />
        )}
      </AllPage>
    </Fragment>
  );
};

export default Projects;

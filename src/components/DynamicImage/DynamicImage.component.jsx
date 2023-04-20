import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "pathseg";

import {randomBackground} from "./DynamicImage";


function DynamicImage() {

  const options = randomBackground();
  
 
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);


    return (
      <Particles id="tsparticles" options={options} init={particlesInit} />

    );
}

export default DynamicImage;
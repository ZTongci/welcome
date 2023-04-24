const  donate= "https://prod.spline.design/qglvba8PGlcotxnF/scene.splinecode";
const  pipe= "https://prod.spline.design/oprkBY2tXEsWtRKI/scene.splinecode";
const  colorCircle = "https://prod.spline.design/xZdQhuxKWEt4ErTh/scene.splinecode";
const scens = [donate, pipe, colorCircle];

export const randomBackgroundUrl = ()=>{
    const random = Math.floor(Math.random() * scens.length);
    return scens[random];
  };
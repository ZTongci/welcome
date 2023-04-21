import Spline from '@splinetool/react-spline';
import { DodoSpline } from './Splinne.styles';
import {randomBackgroundUrl} from "./Spline";




export default function SplineBackround() {
  const UrlBackground = randomBackgroundUrl();
  console.log(UrlBackground==="https://prod.spline.design/oprkBY2tXEsWtRKI/scene.splinecode");
  return (
    <DodoSpline scene={UrlBackground} UrlBackground={UrlBackground==="https://prod.spline.design/oprkBY2tXEsWtRKI/scene.splinecode"}/>
  );
}

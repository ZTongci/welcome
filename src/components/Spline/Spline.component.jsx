import Spline from '@splinetool/react-spline';
import { DodoSpline } from './Splinne.styles';
import {randomBackgroundUrl} from "./Spline";




export default function SplineBackround() {
  const UrlBackground = randomBackgroundUrl();
  return (<div>
    <div style={{backgroundColor:"rgb(0,0,255,0)", width: "100%", height: "100%", position: "fixed", zIndex: 1}}/>
    <DodoSpline scene={UrlBackground} UrlBackground={UrlBackground==="https://prod.spline.design/oprkBY2tXEsWtRKI/scene.splinecode"}/>
    </div>
  );
}

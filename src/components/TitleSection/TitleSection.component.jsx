import Pulse from 'react-reveal/Pulse';
import {MainTitle, SubTitle} from "./TitileSection.styles";


const TitleSection = ({MainTitileHandle, SubTitleHandle})=>{
   return(<div className="section-title">
   <Pulse>
   <MainTitle >{MainTitileHandle}</MainTitle>
   </Pulse>
   <SubTitle>{SubTitleHandle}</SubTitle>
 </div>); 
}

export default TitleSection;

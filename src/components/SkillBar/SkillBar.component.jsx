import {SkillTotal, ProgressBar, SkillContent} from "./SkillBar.style";
import { useState, useEffect } from "react";


const SkillBar = ({SkillDatas})=>{
  


return(
<SkillTotal>
{SkillDatas.map((element, index)=>{
 
  return (<div key={index}>
<SkillContent>{element.skillContent}</SkillContent>
<div className="progress">
  <ProgressBar progress={`${element.percentage}%`} />
</div>
</div>);}

    )}
</SkillTotal>);
}

export default SkillBar;


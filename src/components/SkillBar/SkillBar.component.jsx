import {SkillTotal, ProgressBar, SkillContent} from "./SkillBar.style";


const percentage = 100;


const SkillDatas = [
    {skillContent:"Design 100%", percentage:100},
    {skillContent:"Front develop 90%", percentage:90},
    {skillContent:"Backend develop 75%", percentage:75}
];


const SkillBar = ()=>{

return(
<SkillTotal>
{SkillDatas.map((element, index)=>
<div key={index}>
<SkillContent>{element.skillContent}</SkillContent>
<div className="progress">
  <ProgressBar progress={`${element.percentage}%`} />
</div>
</div>
    )}
</SkillTotal>);
}

export default SkillBar;


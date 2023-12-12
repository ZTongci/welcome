import { SkillTotal, ProgressBar, SkillContent } from "./SkillBar.style";
import { useState, useEffect } from "react";
import { FC } from "react";

type SkillDatasElementType = {
  skillContent:string,
  percentage:string
}
type SkillDatasElementArrayType = {
  SkillDatas:SkillDatasElementType[]
}


const SkillBar:FC<SkillDatasElementArrayType> = ({SkillDatas}) => {
  return (
    <SkillTotal>
      {SkillDatas && SkillDatas.map((element:SkillDatasElementType, index:number) => {
        return (<div key={index}>
          <SkillContent>{element.skillContent}</SkillContent>
          <div className="progress">
            <ProgressBar progress={`${element.percentage}%`} />
          </div>
        </div>);
      }
      )}
    </SkillTotal>);
}

export default SkillBar;


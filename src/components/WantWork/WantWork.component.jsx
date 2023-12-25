import React from "react";
import { StyledBox,SubTitleAnimation1,Email } from "./WantWork.styled";


const WantWork = ({progress}) => {
    return (
        <StyledBox>
            <SubTitleAnimation1 progress={`${progress + 110}`}/>
            
            <div className="text-wrapper-2">Want to work?</div>
            <div className="group">
                <p className="p">
                If you need a modern and powerful website for your business, startup or yourself, I am available for work. You can email me directly at &nbsp; 
                 <Email>ztongci@email.com</Email>
                
                </p>
            </div>
            
                
        </StyledBox>
    );
};

export default WantWork;
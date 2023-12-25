import React from "react";
import { StyledBox,SubTitleAnimation1 } from "./WantWork.styled";


const WantWork = ({progress}) => {
    return (
        <StyledBox>
            <SubTitleAnimation1 progress={`${progress + 110}`}/>
            
            <div className="text-wrapper-2">Want to work?</div>
            <div className="group">
                <p className="p">
                    I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins
                    customers’ trust and helps you do your business well. I make sure your website is up to that standard.
                </p>
            </div>
            
                
        </StyledBox>
    );
};

export default WantWork;
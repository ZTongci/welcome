import React from "react";
import { StyledBox,SubTitleAnimation1 } from "./WhatDo.styled";


const WhatDo = ({progress}) => {
    return (
        <StyledBox>
            <SubTitleAnimation1 progress={`${progress}`}/>
            
            <div className="text-wrapper-2">What I do</div>
            <div className="group">
                <div className="design">Design</div>
                <p className="p">
                    I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins
                    customers’ trust and helps you do your business well. I make sure your website is up to that standard.
                </p>
                <div className="div">Development</div>
                <p className="text-wrapper">
                    I build websites in Webflow where I can create responsive, powerful and fully custom websites. Plus, Webflow
                    has an incredibly simple Content Editor for you and your team to edit website content quickly and easily.
                </p>
            </div>
            
                
        </StyledBox>
    );
};

export default WhatDo;
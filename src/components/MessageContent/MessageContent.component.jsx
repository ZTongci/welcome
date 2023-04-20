import React from "react";

import Zoom from 'react-reveal/Zoom';

import {RevertButton, Content} from "./MessageContent.styles"


function MessageCotent(props) {
    return (

        <Content>
            <Zoom>
                <p>{props.content}</p>
                <RevertButton className="btn btn-lg btn-outline-dark" href={props.buttonLink} >FIND OUT MORE</RevertButton>
            </Zoom>
        </Content>

    );
}

export default MessageCotent;
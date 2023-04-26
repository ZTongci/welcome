import Zoom from 'react-reveal/Zoom';
import Fade  from "react-reveal/Fade";

import {Content} from "./MessageContent.styles"

import MyButton from "../Button/Button.component"

const MessageContent =({content, buttonLink}) =>{
    return (

        <Content>
            <Fade>
                <p>{content}</p>
                <MyButton ButtonLink={buttonLink} Content="FIND OUT MORE"/>
            </Fade>
        </Content>

    );
}

export default MessageContent;
import Zoom from 'react-reveal/Zoom';

import {Content} from "./MessageContent.styles"

import MyButton from "../Button/Button.component"

const MessageContent =({content, buttonLink}) =>{
    return (

        <Content>
            <Zoom>
                <p>{content}</p>
                <MyButton ButtonLink={buttonLink} Content="FIND OUT MORE"/>
            </Zoom>
        </Content>

    );
}

export default MessageContent;
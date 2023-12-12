import {RevertButton} from "./Button.styles"
import { FC } from "react";
import { AnchorHTMLAttributes } from "react";

type ButtonPropsType = {
    ButtonLink:string,
    Content: string
}  & AnchorHTMLAttributes<HTMLAnchorElement>

const MyButton:FC<ButtonPropsType> = ({ButtonLink, Content, ...otherProps })=>{

    return (<RevertButton className="btn btn-lg btn-outline-dark" href={ButtonLink} { ...otherProps }>{Content}</RevertButton>);
}

export default MyButton;

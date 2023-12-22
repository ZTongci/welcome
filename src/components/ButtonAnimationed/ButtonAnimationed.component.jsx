
import { Fragment } from "react";
import {ButtonStyled, ButtonBorder} from "./ButtonAnimationed.styled"


const ButtonAnimationed = ({title})=>{
   return(
   <Fragment>
      <ButtonStyled >{title}</ButtonStyled>
      <ButtonBorder />
   </Fragment>); 
}

export default ButtonAnimationed;



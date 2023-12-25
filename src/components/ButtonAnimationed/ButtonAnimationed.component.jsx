
import {ButtonStyled, ButtonBorder} from "./ButtonAnimationed.styled"
import { Link } from "react-router-dom";


const ButtonAnimationed = ({title, router})=>{
   return(
   <Link to={router ? `/projects/${router}` : "/products"}>
      <ButtonStyled >{title}</ButtonStyled>
      <ButtonBorder />
   </Link >); 
}

export default ButtonAnimationed;



import {RevertButton} from "./Button.styles"

const MyButton = ({ButtonLink, Content})=>{

    return (<RevertButton className="btn btn-lg btn-outline-dark" href={ButtonLink} >{Content}</RevertButton>);
}

export default MyButton;

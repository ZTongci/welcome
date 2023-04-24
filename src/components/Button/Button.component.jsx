import {RevertButton} from "./Button.styles"

const MyButton = ({ButtonLink, Content, ...otherProps })=>{

    return (<RevertButton className="btn btn-lg btn-outline-dark" href={ButtonLink} { ...otherProps }>{Content}</RevertButton>);
}

export default MyButton;

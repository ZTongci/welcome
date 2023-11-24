import { Content } from "./GiveMeBoard.styles"

const GiveMeBoard = ({name, email, phone, message})=>{
    return(
        <Content>
            <p>{`From: ${name}`}</p>
            <p>{`Email: ${email}`}</p>
            <p>{`PhoneNumber: ${phone}`}</p>
            <br/>
            <p>{`message:`}</p>
            <p>{message}</p>
        </Content>

    )
}

export default GiveMeBoard
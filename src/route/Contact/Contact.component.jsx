import React from "react";
import Zoom from 'react-reveal/Zoom';
import TitleSection from "../../components/TitleSection/TitleSection.component"
import MyButton from "../../components/Button/Button.component";
import { WhiteScreen } from "./Contact.styles";
import db from "../../utilize/firebase/firebase.utilize.js"
import { doc, setDoc, collection } from "firebase/firestore"; 


const Contact = ()=>{

    const [nameSended, setNameSended] = React.useState("");
    const [emailSended, setEmailSended] = React.useState("");
    const [phoneSended, setPhoneSended] = React.useState("");
    const [MessageSended, setMessageSended] = React.useState("");
    const [isClicked, setIsClicked] = React.useState(false);
    const [isNotFull, setIsNotFull] = React.useState(false);

    const submitAll = async()=>{
        const data = {
            name: nameSended,
            email:emailSended,
            phone:phoneSended,
            message:MessageSended
          }

        // Add a new document with a generated id
        const newMessageRef = doc(collection(db, "messages"));

        // later...
        await setDoc(newMessageRef, data);

    }

    return (
        <Zoom>
        <TitleSection  MainTitileHandle="Contact" SubTitleHandle={`Want to get in touch? Or give me some feedback? Fill out the form below to send me a message!`}/>

        <main class="mb-4">
            <div class="container-flex px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7" >
                        {/* <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p> */}
                        <WhiteScreen class="my-5">
                            {/* <!-- * * * * * * * * * * * * * * *-->
                            <!-- * * SB Forms Contact Form * *-->
                            <!-- * * * * * * * * * * * * * * *-->
                            <!-- This form is pre-integrated with SB Forms.-->
                            <!-- To make this form functional, sign up at-->
                            <!-- https://startbootstrap.com/solution/contact-forms-->
                            <!-- to get an API token!--> */}
                            <div id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div class="form-floating">
                                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" onChange={(e)=>{setNameSended(e.target.value)}}/>
                                    <label for="name">Name</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" onChange={(e)=>{setEmailSended(e.target.value)}}/>
                                    <label for="email">Email address</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" onChange={(e)=>{setPhoneSended(e.target.value)}}/>
                                    <label for="phone">Phone Number</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" id="message" placeholder="Enter your message here..." style={{height: "12rem"}} data-sb-validations="required" onChange={(e)=>{setMessageSended(e.target.value)}}></textarea>
                                    <label for="message">Message</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                {/* <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is--> */}
                                {/* <!-- an error submitting the form--> */}
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                {/* <!-- Submit Button--> */}
                                {  isClicked ? <h1>❤️Thank you for your message, I will get back to you as soon as possible!</h1> :  <MyButton Content={"Send to me"} id="submitButton" onClick={()=>{
                                    if(nameSended !== "" && MessageSended !== ""){
                                        if(emailSended !== "" || phoneSended !== ""){
                                            submitAll()
                                            setIsClicked(true)
                                            setIsNotFull(false)
                                        }
                                        else{
                                            setIsNotFull(true)
                                        }
                                    }
                                    else{setIsNotFull(true)}
                                    }}/>}
                                {isNotFull && <p>I would greatly appreciate it if you could leave your conntact information.</p>}

                            </div>
                        </WhiteScreen>
                    </div>
                </div>
            </div>
        </main>
        </Zoom>
    );
}

export default Contact;
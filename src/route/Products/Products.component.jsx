import React from "react";
import Zoom from 'react-reveal/Zoom';

import TitleSection from "../../components/TitleSection/TitleSection.component"
import { WhiteScreen, CategorContainer } from "./Products.styles";

import TingDogImg from "../../image/projects/project1.png";
import FlashChatImg from "../../image/projects/project2.png";
import CrwnClothing from "../../image/projects/project3.png";
import TwitterImg from "../../image/projects/project4.png";
import ClimaImg from "../../image/projects/project5.png";
import BMIImg from "../../image/projects/project6.png";
import SalaryIMG from "../../image/projects/project7.png";
import VincentIMG from "../../image/projects/project8.png";
import EmotionIMG from "../../image/projects/project9.png";
import MeettingIMG from "../../image/projects/project10.png";
import IcelandIMG from "../../image/projects/project11.png";
import PhoneCallIMG from "../../image/projects/project12.png";
import BeerIMG from "../../image/projects/project13.png";
import BlackFridayIMG from "../../image/projects/project14.png";



const ProductsResourse = [
    {imgUrl:SalaryIMG, isPhone:true, title:"SalaryApp", content:"FlutterApp", link:""},
    {imgUrl:EmotionIMG, isPhone:false, title:"Emotion", content:"Design", link:""},
    {imgUrl:VincentIMG, isPhone:false, title:"Vincent", content:"Design", link:""},
    {imgUrl:FlashChatImg, isPhone:true, title:"FlashChat", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_flash_chat_project"},
    {imgUrl:TwitterImg, isPhone:true, title:"Twitter", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_twitter_project"},
    {imgUrl:PhoneCallIMG, isPhone:false, title:"PhoneCallApp", content:"Design", link:""},
    
    {imgUrl:MeettingIMG, isPhone:false, title:"MeettingApp", content:"Design", link:""},
    {imgUrl:BMIImg, isPhone:true, title:"BMI", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_bmi_calculator_project"},
    {imgUrl:ClimaImg, isPhone:true, title:"Weather", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_clima_app_project"},
    {imgUrl:CrwnClothing, isPhone:false, title:"CrwnClothing", content:"ReactApp", link:"https://github.com/ZTongci/crwn-clothing-v2"},
    {imgUrl:TingDogImg, isPhone:false, title:"TinDog", content:"Design", link:"https://ztongci.github.io/TingDog/", flex:true},
    {imgUrl:IcelandIMG, isPhone:false, title:"Iceland", content:"Design", link:"", flex:true},
    {imgUrl:BeerIMG, isPhone:false, title:"Beer", content:"Design", link:"", flex:true},
    {imgUrl:BlackFridayIMG, isPhone:false, title:"BlackFridaySell", content:"Design", link:"", flex:true},

]


function Products() {

    return (
        <Zoom>
            <TitleSection MainTitileHandle="Products"
                SubTitleHandle="This is my Work example." />

            <WhiteScreen>
                {ProductsResourse.map(element=>

                     <CategorContainer isPhone={element.isPhone} isflex={element.flex}>
                     <a className="background-image" href={element.link} style={{
                         backgroundImage: `url(${element.imgUrl})`,
                     }} />
                     <div className='category-body-container'>
                         <h2>{element.title}</h2>
                         <p>{element.content}</p>
                     </div>
                 </CategorContainer>

                    )}
            </WhiteScreen>
        </Zoom>
    );
}

export default Products;
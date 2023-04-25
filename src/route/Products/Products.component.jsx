import React from "react";
import Zoom from 'react-reveal/Zoom';

import TitleSection from "../../components/TitleSection/TitleSection.component"
import { WhiteScreen, CategorContainer } from "./Products.styles";
import TingDogImg from "../../image/project1.png";
import FlashChatImg from "../../image/project2.png";
import CrwnClothing from "../../image/project3.png";
import TwitterImg from "../../image/project4.png"
import ClimaImg from "../../image/project5.png"
import BMIImg from "../../image/project6.png"


const ProductsResourse = [
    {imgUrl:TingDogImg, isPhone:false, title:"TinDog", content:"Website", link:"https://ztongci.github.io/TingDog/"},
    {imgUrl:FlashChatImg, isPhone:true, title:"FlashChat", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_flash_chat_project"},
    {imgUrl:TwitterImg, isPhone:true, title:"Twitter", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_twitter_project"},
    {imgUrl:ClimaImg, isPhone:true, title:"WeatherApp", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_clima_app_project"},
    {imgUrl:BMIImg, isPhone:true, title:"BMICalculator", content:"FlutterApp", link:"https://github.com/ZTongci/flutter_bmi_calculator_project"},
    {imgUrl:CrwnClothing, isPhone:false, title:"CrwnClothing", content:"ReactApp", link:"https://github.com/ZTongci/crwn-clothing-v2"},
]


function Products() {

    return (
        <Zoom>
            <TitleSection MainTitileHandle="Products"
                SubTitleHandle="This is my Work example." />

            <WhiteScreen>
                {ProductsResourse.map(element=>

                     <CategorContainer isPhone={element.isPhone}>
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
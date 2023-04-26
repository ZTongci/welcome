import React, { useEffect, useState, Fragment } from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
    { type: 3, imgUrl: SalaryIMG, isPhone: true, title: "SalaryApp", content: "FlutterApp", link: "" },
    { type: 1, imgUrl: EmotionIMG, isPhone: false, title: "Emotion", content: "Design", link: "" },
    { type: 1, imgUrl: VincentIMG, isPhone: false, title: "Vincent", content: "Design", link: "" },
    { type: 3, imgUrl: FlashChatImg, isPhone: true, title: "FlashChat", content: "FlutterApp", link: "https://github.com/ZTongci/flutter_flash_chat_project" },
    { type: 3, imgUrl: TwitterImg, isPhone: true, title: "Twitter", content: "FlutterApp", link: "https://github.com/ZTongci/flutter_twitter_project" },
    { type: 1, imgUrl: PhoneCallIMG, isPhone: false, title: "PhoneCallApp", content: "Design", link: "" },

    { type: 1, imgUrl: MeettingIMG, isPhone: false, title: "MeettingApp", content: "Design", link: "" },
    { type: 3, imgUrl: BMIImg, isPhone: true, title: "BMI", content: "FlutterApp", link: "https://github.com/ZTongci/flutter_bmi_calculator_project" },
    { type: 3, imgUrl: ClimaImg, isPhone: true, title: "Weather", content: "FlutterApp", link: "https://github.com/ZTongci/flutter_clima_app_project" },
    { type: 2, imgUrl: CrwnClothing, isPhone: false, title: "CrwnClothing", content: "ReactApp", link: "https://github.com/ZTongci/crwn-clothing-v2" },
    { type: 1, imgUrl: TingDogImg, isPhone: false, title: "TinDog", content: "Design", link: "https://ztongci.github.io/TingDog/", flex: true },
    { type: 1, imgUrl: IcelandIMG, isPhone: false, title: "Iceland", content: "Design", link: "", flex: true },
    { type: 1, imgUrl: BeerIMG, isPhone: false, title: "Beer", content: "Design", link: "", flex: true },
    { type: 1, imgUrl: BlackFridayIMG, isPhone: false, title: "BlackFridaySell", content: "Design", link: "", flex: true },
]

const ProductsResourseInit = ProductsResourse.concat();
ProductsResourse.sort((first, second) => first.type - second.type);

function Products() {
    const [Productslist, setProductslist] = useState(ProductsResourse);

    function reportWindowSize() {
        if (window.innerWidth <= 1350) {
            const resizeList = ProductsResourse.sort((first, second) => first.type - second.type
            )
            setProductslist(resizeList);
        }
        else {
            setProductslist(ProductsResourseInit);
        }
    };

    // 防抖函数
    function debounce(fn, wait) {
        var timeout = null;
        return function () {
            if (timeout !== null)
                clearTimeout(timeout);
            timeout = setTimeout(fn, wait);
        }
    }


    useEffect(() => {
        
        window.addEventListener('resize', debounce(reportWindowSize,1));

        
        return () => window.removeEventListener('resize', debounce(reportWindowSize,1));
    });

    return (
        <Fragment>
            <Zoom>
                <TitleSection MainTitileHandle="Products"
                    SubTitleHandle="This is my Work example." />
            </Zoom>
            <WhiteScreen>
            
                { window.innerWidth <= 1350?(Productslist.map((element,index) =>
                <CategorContainer isPhone={element.isPhone} isflex={element.flex} key={index}>
                        <a className="background-image" href={element.link} style={{
                            backgroundImage: `url(${element.imgUrl})`,
                        }} />
                        
                        <div className='category-body-container'>
                        <Fade>
                            <h2>{element.title}</h2>
                            <p>{element.content}</p>
                            </Fade>
                        </div>
                    </CategorContainer>

                )):(ProductsResourseInit.map((element,index) =>
                <CategorContainer isPhone={element.isPhone} isflex={element.flex} key={index}>
                        <a className="background-image" href={element.link} style={{
                            backgroundImage: `url(${element.imgUrl})`,
                        }} />
                        
                        <div className='category-body-container'>
                        <Fade>
                            <h2>{element.title}</h2>
                            <p>{element.content}</p>
                            </Fade>
                        </div>
                    </CategorContainer>

                ))}
            
            </WhiteScreen>

        </Fragment>
    );
}

export default Products;
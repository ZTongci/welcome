import React from "react";
import Zoom from "react-reveal/Zoom";
import TitleSection from "../../components/TitleSection/TitleSection.component"
import { Content, PostPreView } from "./Blog.styles";
import MyButton from "../../components/Button/Button.component";


const blogResourse = [
    { title: "Man must explore, and this is exploration at its greatest", subTitle: "Problems look mighty small from 150 miles up", timeSubmit: "on September 24, 2022" },
    { title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.", subTitle: "", timeSubmit: "on September 18, 2022" },
    { title: "Science has not yet mastered prophecy", subTitle: "We predict too much for the next year and yet far too little for the next ten.", timeSubmit: "on August 24, 2022" },
    { title: "Failure is not an option", subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.", timeSubmit: "on July 8, 2022" }
];


function Blog() {

    return (
        <Zoom>
            <TitleSection MainTitileHandle="Blog" SubTitleHandle="----The webpage will be launched.----" />
            <Content className="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                       
                        {blogResourse.map(Element =>

                            <PostPreView>
                                <a href="post.html">
                                    <h2 class="post-title">{Element.title}</h2>
                                    <h3 class="post-subtitle">{Element.subTitle}</h3>
                                </a>
                                <p class="post-meta">
                                    Posted by <a href="#!">Start Bootstrap</a> {Element.timeSubmit}
                                </p>
                                <hr class="my-4" />
                            </PostPreView>
                        )}
                   
                        <div class="d-flex justify-content-end mb-4">
                            <MyButton ButtonLink="./" Content="Older Posts →" />
                        </div>
                    </div>
                </div>
            </Content>
        </Zoom>
    );
}

export default Blog;
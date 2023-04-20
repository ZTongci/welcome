import React from "react";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

function Message() {

    return (
        <div>
            <Pulse>
            <h1 className="all-contents main-title">Message</h1>
            </Pulse>
            <Zoom>
            <h2 className="sub-title" style={{ margin: "10% 10%" }}>I love what I do. Design isn’t just my job, it’s my life. My clients’ passion fuels my creativity, inspires my ideas, and drives me to pursue the extraordinary.</h2>
            </Zoom>
            <div style={{ backgroundColor: "white", position: "relative", zIndex: "0", opacity:"0.95"}}>
                <div className="masthead" >
                    <div class="masthead-content text-white">
                        <div class="container-flex px-4 px-lg-0">
                        <Slide left>
                            <h1 class="fst-italic lh-1 mb-4">I am Webdevoper</h1>
                            <p class="mb-5" style={{ textAlign: "left" }}>I bring natural curiosity, fresh perspectives, years of experience, strategic insight, uncompromising quality, and a ridiculous love for what I do to each and every project.
                                <br />
                                <br />
                                Web development and its flawless execution is my strength, and I believe that web development is an integral part of our modern world. It enables us to connect with others, share information, and create innovative solutions to complex problems.
                                <br />
                                <br />
                                As a web developer, I strive to create engaging, effective, and user-friendly websites that meet the unique needs of my clients.
                                <br />
                                <br />
                                I understand the importance of both aesthetics and functionality in web development. A website must not only look great but also be easy to navigate, load quickly, and function flawlessly. This is why I place a strong emphasis on user experience design and web performance optimization.
                                <br />
                                <br />
                                Furthermore, I believe that web development should be accessible to everyone. It shouldn't be reserved for only those with large budgets or extensive resources. This is why I strive to make my services affordable and accessible, without compromising on quality.
                                <br />
                                <br />
                                In today's digital age, web development plays an increasingly important role in shaping our lives. It has the power to inform, entertain, and even transform the world around us.
                                <br />
                                <br />
                                As a web developer, I am excited to be a part of this dynamic and constantly evolving field, and I look forward to creating innovative and impactful websites that make a difference.</p>
                                </Slide>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        
    );
}

export default Message;
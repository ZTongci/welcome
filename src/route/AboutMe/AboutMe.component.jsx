import React from "react";
import meImg from "../../image/hero-me.png";
import me from "../../image/me-about.JPG";
import Pulse from 'react-reveal/Pulse';


function AboutMe(){
    
    return (
       <div>
        <section id="hero">
          <div className="hero-container">
            <img src={meImg} className="here-me" />
            <Pulse>
            <h1 className="hero-mainTitle">TONGCI ZHANG</h1>
            </Pulse>
            <h2 className="hero-subTitle">I'm a Professional Fullstack Engineer In Tokyo</h2>
            <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
          </div>
        </section>
       
      
        <main id="main">
      
         
          <section id="about" className="about" style={{paddingTop:"10%"}}>
            <div className="container">
      
              <div className="section-title">
              <Pulse>
                <h1 >About Me</h1>
                </Pulse>
                <h2>Introducing My Experience, Skills, and Achievements.</h2>
              </div>
      
              <div className="row">
                <img src={me} alt="" className="about-image col-lg-5 col-md-12 col-sm-12 d-flex align-items-stretch justify-content-center justify-content-lg-start" style={{width:"500px",height:"680px"}}/>
                <div className="col-lg-7 col-md-12 col-sm-12 d-flex flex-column align-items-stretch about-letter">
                  <div className="content-about ps-lg-4 d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-lg-6 messgae-content">
                        <ul>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Name:</strong> <span>Tongci Zhang</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Website:</strong> <span>ztongci.github.io/welcome</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Phone:</strong> <span>+81 090-9702-9795</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>City:</strong> <span>Tokyo, JAPAN</span></li>
                        </ul>
                      </div>
                      <div className="col-lg-6 messgae-content">
                        <ul>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Age:</strong> <span>26</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Degree:</strong> <span>Master of Business Administration</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>PhEmailone:</strong> <span>ztongci@gmail.com</span></li>
                          <li><i className="fa-solid fa-chevron-right arrow-about"></i> <strong>Freelance:</strong> <span>Available</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-n4 resize-about-content">
                      <div className="col-lg-6 col-md-12 mt-3 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                        <i class="fa-regular fa-face-smile icon-about" style={{color: "#20b38e"}}></i>
                          <span className="purecounter">5</span>
                          <p><strong>Happy Clients:</strong> The current satisfaction rate of all clients is 100%.</p>
                        </div>
                      </div>
      
                      <div className="col-lg-6 col-md-12 mt-3 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                        <i class="fa-solid fa-list-check icon-about" style={{color: "#8a1ac2"}}></i>
                          <span className="purecounter">10</span>
                          <p><strong>Projects:</strong> Total number of projects undertaken in my main and side careers.</p>
                        </div>
                      </div>
      
                      <div className="col-lg-6 col-md-12 mt-3 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="fa-regular fa-clock icon-about" style={{color: "#2cbdee"}}></i>
                          <span  className="purecounter">2</span>
                          <p><strong>Years of experience:</strong> Although I have limited experience, I am able to adapt to any project.</p>
                        </div>
                      </div>
      
                      <div className="col-lg-6 col-md-12 mt-3 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <i className="fa-solid fa-award icon-about" style={{color: "#ffb459"}}></i>
                          <span className="purecounter">4</span>
                          <p><strong>Advantage</strong> I am proficient in programming for both front-end and back-end development using languages such as Flutter, Python, React, and Node.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              
            
                  
                  <div className="skills-content ps-lg-4">
                  <p className="skill">Design 100%</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "100%"}}></div>
                    </div>
      
                    <p className="skill">Front develop 90%</p>
                    <div className="progress">
                      
                   
                        <div className="progress-bar" style={{width: "90%"}}></div>
                      
                    </div>
                    
                    <p className="skill">Backend develop 75%</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "75%"}}></div>
                    </div>
                  </div>
                  
      
                </div>
              </div>
      
            </div>
          </section>
          
      
          
          <section id="resume" className="resume" style={{padding:"10%"}}>
            <div className="container">
      
              <div className="section-title">
              <Pulse>
                <h1 >My Resume</h1>
                </Pulse>
                <h2>My Work Experience, Education Background, and Skills.</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Tongci Zhang</h4>
                    <p><em>Innovative and deadline-driven Full Stack Engineer with over 2 years of experience, able to design and develop user-centered digital products from initial concept to final, polished deliverable.</em></p>
                    <p>
                    <ul>
                      <li>Nisshincho Kawasaki,Kanagawa, Jp</li>
                      <li>+81(090) 6702-9795</li>
                      <li>ztongci@gmail.com</li>
                    </ul>
                    </p>
                  </div>
      
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Master of Business Administration &amp; International Management</h4>
                    <h5>2020 - 2022</h5>
                    <p><em>AoyamaGakuin Institute of Business, AoyamaGakuin, JP</em></p>
                    <p>Through application development, I have learned about various aspects of business management, including marketing, finance, organization, management, and leadership. This broad perspective allows me to grasp business from a wide angle.</p>
                  </div>
                  <div className="resume-item">
                    <h4>Bachelor of Japanese &amp; Business</h4>
                    <h5>2015 - 2019</h5>
                    <p><em>Haerbin Normal Institute of Oriental Languages, Haerbin Normal, CN</em></p>
                    <p>Not only Japanese,If customers have any needs, I am capable of daily communication and conversation in Chinese, English, Japanese, and French.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Professional Experience</h3>
                  <div className="resume-item">
                    <h4>Junior Full Stack Engineer</h4>
                    <h5>2022 - Present</h5>
                    <p><em>Systena, Tokyo, JP </em></p>
                    <p>
                    <ul>
                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials.</li>
                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                      <li>Supervise the assessment of all design,coding materials in order to ensure quality and accuracy of the design.</li>
                      <li>Oversee production projects and provide feasible development ideas.</li>
                    </ul>
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>Self-learning.</h4>
                    <h5>2021 - Present</h5>
                    <p><em>Systena, Tokyo, JP</em></p>
                    <p>
                    <ul>
                      <li>Developed Website, smartphone application programs (React.js, Node.js, Flutter, Flask.Py, Spring.Java).</li>
                      <li>Utilized Python for tasks such as data analysis, data visualization through graphics, and constructing a model of the Department of Mechanics.</li>
                      <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
                      <li>I focused on proposal activities such as revitalization of Tokyo's remote islands during my MBA studies.</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
      
            </div>
          </section>
          </main>
          </div>
    );
}

export default AboutMe;
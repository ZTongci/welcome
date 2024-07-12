import {
  ConclutionTitle,
  MainTitle,
  PeriorTitle,
  ResumeItem,
} from "./Resume.style";

const Resume = () => {
  return (
    <section id="resume" className="resume" style={{ padding: "10%" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ConclutionTitle>Sumary</ConclutionTitle>
            <ResumeItem className="pb-0">
              <MainTitle>Tongci Zhang</MainTitle>
              <p>
                <em>
                  Innovative and deadline-driven Full Stack Engineer with over 2
                  years of experience, able to design and develop user-centered
                  digital products from initial concept to final, polished
                  deliverable.
                </em>
              </p>
              <p>
                <ul>
                  <li>Nisshincho Kawasaki,Kanagawa, Jp</li>
                  <li>+81(070) 9209-3452</li>
                  <li>ztongci@gmail.com</li>
                </ul>
              </p>
            </ResumeItem>

            <ConclutionTitle>Education</ConclutionTitle>
            <ResumeItem>
              <MainTitle>
                Master of Business Administration &amp; International Management
              </MainTitle>
              <PeriorTitle>2020 - 2022</PeriorTitle>
              <p>
                <em>AoyamaGakuin Institute of Business, AoyamaGakuin, JP</em>
              </p>
              <p>
                Through application development, I have learned about various
                aspects of business management, including marketing, finance,
                organization, management, and leadership. This broad perspective
                allows me to grasp business from a wide angle.
              </p>
            </ResumeItem>
            <ResumeItem>
              <h4>Bachelor of Japanese &amp; Business</h4>
              <PeriorTitle>2015 - 2019</PeriorTitle>
              <p>
                <em>
                  Haerbin Normal Institute of Oriental Languages, Haerbin
                  Normal, CN
                </em>
              </p>
              <p>
                Not only Japanese,If customers have any needs, I am capable of
                daily communication and conversation in Chinese, English,
                Japanese, and French.
              </p>
            </ResumeItem>
          </div>
          <div className="col-lg-6">
            <ConclutionTitle>Professional Experience</ConclutionTitle>
            <ResumeItem>
              <MainTitle>Junior Full Stack Engineer</MainTitle>
              <PeriorTitle>2022 - 2023</PeriorTitle>
              <p>
                <em>Systena, Tokyo, JP </em>
              </p>
              <p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials.
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{" "}
                  </li>
                  <li>
                    Supervise the assessment of all design,coding materials in
                    order to ensure quality and accuracy of the design.
                  </li>
                  <li>
                    Oversee production projects and provide feasible development
                    ideas.
                  </li>
                </ul>
              </p>
            </ResumeItem>
            <ResumeItem>
              <MainTitle>Self-learning And Freelancer</MainTitle>
              <PeriorTitle>2023 - Present</PeriorTitle>
              <p>
                <em>YouTouch, Tokyo, JP</em>
              </p>
              <p>
                <ul>
                  <li>
                    Developed Website, smartphone application programs
                    (React.js, Node.js, Flutter, Flask.Py, SpringBoot.Java).
                  </li>
                  <li>
                    Utilized Python for tasks such as data analysis, data
                    visualization through graphics, and constructing a model of
                    the Department of Mechanics.
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design.
                  </li>
                  <li>
                    I focused on proposal activities such as revitalization of
                    Tokyo's remote islands during my MBA studies.
                  </li>
                </ul>
              </p>
            </ResumeItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

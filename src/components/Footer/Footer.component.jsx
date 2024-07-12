import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Foot, Signed } from "./Footer.styles";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Foot>
      <Fade>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/%E6%A1%90%E6%85%88-%E5%BC%B5-583170244/">
                    <span className="fa-stack fa-xl">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/people/%E5%BC%A0%E6%A1%90%E6%85%88/pfbid02H4tov1XExJ4y2oZzoubFCS32ydWy5V6TdvBKbmDd9EJUxzTyBv9B25DDF2toYTsml/">
                    <span className="fa-stack fa-xl">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/ZTongci">
                    <span className="fa-stack fa-xl">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">
                <Signed>Copyright &copy; Tongci {year} </Signed>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Foot>
  );
}

export default Footer;

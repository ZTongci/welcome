import React, { Fragment, useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import meLogo from "../../image/me-logo.png";
import Fade from 'react-reveal/Fade';
import Footer from "../../components/Footer/Footer.component";

import {
  NavLabelLink,
  NavBarTotal,
  NavBarRow,
  Welcome,
  NavLabelToggle,
  NavLabel,
  NavLink} from "./Navbar.styles";


function Navbar() {
  //Because of bootstrap defautlinkHover need change css element here
  const [Menu, setMenu] = React.useState("home");

  function chaneColor(clickMenu) {
    setMenu(clickMenu);
  }
  const LinkStyle = (element)=>{
    const isActive = { color: "white", backgroundColor: "rgb(50,50,46)", } ;
    const notActive = { color: "#0000008C" };
    return element === Menu ? isActive : notActive;
  }

  // nav自动化
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWindowSize(window.innerWidth)
    });
  },[window.innerWidth])


  return (
    <Fragment>
      <NavBarTotal className="navbar">
        <NavBarRow >
          <Fade>
            <Link className="navbar-brand" to="/" >
              <NavLabel>Tongci.</NavLabel>
              </Link>
          </Fade>
{         windowSize >= 1000 ? 
          <div>
                    <NavLink to="/aboutme">About Me</NavLink>
                    <NavLink to="/products">Product</NavLink>
                    <NavLink to="/messages">Message</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
          </div>: 
          





          <Fragment>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header">
              <Welcome className="offcanvas-title" id="offcanvasNavbarLabel">Welcome</Welcome>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <span  data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><NavLabelLink className="nav-link" aria-current="page" to="/" onMouseOver={() => { chaneColor("home") }} style={LinkStyle("home")}>Home</NavLabelLink ></span>
                </li>
                <li className="nav-item">
                  <span  data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><NavLabelLink className="nav-link" to="/aboutme" onMouseOver={() => { chaneColor("about") }} style={LinkStyle("about")}>About Me </NavLabelLink></span>
                </li>
                <li className="nav-item">
                  <span  data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><NavLabelLink className="nav-link" to="/contact" onMouseOver={() => { chaneColor("contact") }} style={LinkStyle("contact")}>Contact</NavLabelLink></span>
                </li>
                <li className="nav-item dropdown">
                  <NavLabelToggle className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" onMouseOver={() => { chaneColor("work") }} onClick={() => { chaneColor("work") }} style={(Menu === "work" || Menu === "blog" || Menu === "message" || Menu === "product") ? { color: "white", backgroundColor: "rgb(50,50,46)"} : { color: "#0000008C"}}>
                    Work
                  </NavLabelToggle>
                  <ul className="dropdown-menu">
                    <span data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><li><NavLabelLink className="dropdown-item" to="/products" onMouseOver={() => { chaneColor("product") }}  style={LinkStyle("product")}>Products</NavLabelLink></li></span>
                    <span data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><li><NavLabelLink className="dropdown-item" to="/messages" onMouseOver={() => { chaneColor("message") }}  style={LinkStyle("message")}>Message</NavLabelLink></li></span>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <span data-bs-toggle="offcanvas" data-bs-target=".navbar-offcanvas.show"><li><NavLabelLink className="dropdown-item" to="/blog" onMouseOver={() => { chaneColor("blog") }}  style={LinkStyle("blog")}>Blog</NavLabelLink></li></span>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </Fragment>}
        </NavBarRow>
        
      </NavBarTotal>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Navbar;
import React from "react";
import Navbar from "./route/Navbar/Navbar.component";

import DynamicImage from "./components/DynamicImage/DynamicImage.component";
import Home from "./route/Home/Home.component";
import Contact from "./route/Contact/Contact.component";
import AboutMe from "./route/AboutMe/AboutMe.component";
import Products from "./route/Products/Products.component";
import Message from "./route/Message/Message.component";
import Blog from "./route/Blog/Blog.component";
import SplineBackround from "./components/Spline/Spline.component";
import { Routes, Route} from "react-router-dom";
import GiveMe from "./route/giveme/giveme.component";



function App() {
  const totalBackground = [<SplineBackround />,
  <DynamicImage />
  ];

  const randomBackground = () => {
    const random = Math.floor(Math.random() * totalBackground.length);
    return totalBackground[random];
  };

  return (
    <div>
      {randomBackground()}
      <Routes>
        <Route path={`/`} element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path={`/aboutme`} element={<AboutMe />} />
          <Route path={`/products`} element={<Products />} />
          <Route path={`/messages`} element={<Message />} />
          <Route path={`/blog`} element={<Blog />} />
          <Route path={`/giveme`} element={<GiveMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
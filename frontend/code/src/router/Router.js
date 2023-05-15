import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Projects from "../page/Projects";
import Partners from "../page/Partners";
import GetInvolved from "../page/GetInvolved";
import ContactUs from "../page/ContactUs";
import WhatWeDo from "../page/WhatWeDo";
import News from "../page/News";

function Router(){
    return (
        <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          {/* who we are */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/our-vision" element={<Dashboard />} />
          <Route path="/our-impact" element={<GetInvolved />} />
          <Route path="/history-timeline" element={<NoMatch />} /> */}
          {/* what we do */}
          <Route path="/projects" element={<WhatWeDo/>} />
          {/* <Route path="/programs" element={<Dashboard />} /> */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/get-involved" element={<GetInvolved/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    );
}
export default Router; 
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Projects from "../page/Projects";
import Partners from "../page/Partners";
import GetInvolved from "../page/GetInvolved";
import ContactUs from "../page/ContactUs";
import WhatWeDo from "../page/WhatWeDo";
import News from "../page/News";
import WhoWeAre from "../page/WhoWeAre";
import NewsDetails from "../page/NewsDeatails";
import PrivacyPolicy from "../page/PrivacyPolicy";
function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        {/* who we are */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/our-vision" element={<Dashboard />} />
          <Route path="/our-impact" element={<GetInvolved />} />
          <Route path="/history-timeline" element={<NoMatch />} /> */}
        {/* what we do */}
        <Route path="/projects" element={<WhatWeDo />} />
        {/* <Route path="/programs" element={<Dashboard />} /> */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:news_id" element={<NewsDetails />} />

        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Route>
    </Routes>
  );
}
export default Router; 
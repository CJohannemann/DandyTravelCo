import React from 'react';
//import {Route, Routes} from "react-router";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./main/frontend/src/pages/home";
import Navbar from "./main/frontend/src/pages/components/navBar";
import BlogLandingPage from './main/frontend/src/pages/blogHome/BlogLandingPage';
import Blog from './main/frontend/src/pages/blog/Blog';

function App() {
  return (
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Blogs" element={<BlogLandingPage/>}/>
          <Route path="/Blogs/Blog" element={<Blog/>}/>
        </Routes>
      </Router>
  );
}

export default App;

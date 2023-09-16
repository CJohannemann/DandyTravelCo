import React from 'react';
//import {Route, Routes} from "react-router";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Blog from './main/frontend/src/pages/blog/Blog';
import './App.css';
import HomePage from "./main/frontend/src/pages/home";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Router from "./router/Router";
import GetInvolved from "./components/GetInvolved";
import StartModal from "./components/StartModal";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (localStorage.getItem('lang_id') === undefined || localStorage.getItem('lang_id') === null){
      localStorage.setItem('lang_id', 1);
    }
  }, []);
  return (
    <div className="">
      <div>
        <StartModal />
        <Header />
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Router />
        <Footer />
      </div>
    </div>
  )
};

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/get-involved">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default App;

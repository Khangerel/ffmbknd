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
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    if (
      localStorage.getItem("lang_id") === undefined ||
      localStorage.getItem("lang_id") === null
    ) {
      localStorage.setItem("lang_id", 1);
    }
  }, []);

  return (
    <div>
      <StartModal />
      <Header />
      <Router />
      <Footer />
    </div>
  );
}


export default App;

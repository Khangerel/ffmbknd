import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Router from "./router/Router";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

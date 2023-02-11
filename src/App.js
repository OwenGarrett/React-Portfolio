import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "./assets/style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("about");
  function renderPage() {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "about") {
      return <About />;
    } else if (currentPage === "portfolio") {
      return <Portfolio />;
    } else if (currentPage === "contact") {
      return <Contact />;
    }
  }

  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <Contact />
      <Footer />
      {renderPage()}
    </>
  );
};

export default App;

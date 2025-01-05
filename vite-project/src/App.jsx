import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WorldCoffeeExplorer from "./components/WorldCoffeeExplorer";
import CountrySelect from './country_select';
import './App.css';
// import GlobeApp from 'globe settings/src/App.js';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <img src="/public/coffee.png" alt="Coffee Cup" className="coffee-cup" />
          Java Journey
        </h1>
        <button 
          className="explore-button"
          onClick={() => alert("Explore Coffee Coming Soon!")}
        >
          Explore Coffee Around the World
        </button>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Java Journey. All rights reserved.
      </p>
      <p>
        Made By Jake, Jacob, Jermaine, & Gianna.
        <br />
        Powered by the love of coffee &nbsp;☕
      </p>
    </footer>
  );
};

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo">
            <img src="/public/coffee.png" alt="Coffee Cup" className="coffee-cup" />
            Java Journey
          </h1>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <section className="hero">
                <div className="image-container">
                  <div className="image-box image1"></div>
                  <div className="image-box image2"></div>
                  <div className="image-box image3"></div>
                  <div className="image-box image4"></div>
                </div>
                <div className="hero-content">
                  <h2 className="hero-title">Discover Coffee's Journey</h2>
                  <p className="hero-subtitle">
                    Explore the rich history and diverse flavors of coffee <br />
                    from around the world!
                  </p>
                  <Link to="/globe" className="explore-button">
                    Explore World Coffee History
                  </Link>
                  <img
                    src="/coffee-animation.gif"
                    alt="Animated coffee gif"
                    className="coffee-gif"
                  />
                </div>
              </section>
              <CountrySelect />
            </>
          } />
          <Route path="/globe" element={<WorldCoffeeExplorer />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
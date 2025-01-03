import React, { useState } from 'react';
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

  const coffeeFacts = {
    Ethiopia: "Ethiopia is known as the birthplace of coffee. The legend of Kaldi and his goats discovering coffee originates here.",
    Brazil: "Brazil is the largest coffee producer in the world, contributing about a third of the global coffee supply.",
    Colombia: "Colombian coffee is famous for its smooth, mild flavor and is often grown in the Andes mountains.",
    Italy: "Italy is renowned for its espresso culture and is home to iconic coffee drinks like cappuccino and macchiato.",
    Vietnam: "Vietnam is the second-largest coffee producer, known for its Robusta beans and unique Vietnamese iced coffee.",
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="app">
      <Header />
      
      {/* Hero Section */}
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
          <img
            src="/coffee-animation.gif"
            alt="Animated coffee gif"
            className="coffee-gif"
          />
        </div>
      </section>

      {/* Coffee Facts Section */}
      <section className="coffee-facts">
        <h2>Learn About Coffee Around the World</h2>
      </section>

      <Footer />
    </div>
  );
};

export default App;
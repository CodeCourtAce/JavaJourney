import React, { useState } from 'react';
import './App.css';

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
      <header className="header">
        <h1 className="logo">
          <img src="/public/coffee.png" alt="Coffee Cup" className="coffee-cup" />
          Java Journey
        </h1>
      </header>

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
          {/* Add your GIF here */}
          <img
            src="/coffee-animation.gif"
            alt="Animated coffee gif"
            className="coffee-gif"
          />
        </div>
      </section>

      <section className="coffee-facts">
        <h2>Learn About Coffee Around the World (this is a placeholder for the globe code) 😊</h2>
        <div className="places-list">
          {Object.keys(coffeeFacts).map((place) => (
            <button
              key={place}
              className="place-button"
              onClick={() => handlePlaceClick(place)}
            >
              {place}
            </button>
          ))}
        </div>
        {selectedPlace && (
          <div className="fact-box">
            <h3>{selectedPlace}</h3>
            <p>{coffeeFacts[selectedPlace]}</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default App;

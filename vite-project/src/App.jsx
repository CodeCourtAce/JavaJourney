import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Java Journey</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Discover Coffee's Journey</h2>
          <p className="hero-subtitle">
            Explore the rich history and diverse flavors of coffee <br />
            from around the world!
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;

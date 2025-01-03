import React, { useState } from 'react';
import './App.css';
import GlobeApp from 'globe settings/src/App.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // State to manage navigation

  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="logo">
          <img src="/public/coffee.png" alt="Coffee Cup" className="coffee-cup" />
          Java Journey
        </h1>
        <nav className="nav-bar">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('globe')}>Globe Settings</button>
        </nav>
      </header>

      {/* Main Content Section */}
      <main>
        {currentPage === 'home' ? (
          <div className="home-content">
            <section className="hero">
              <div className="hero-content">
                <h2 className="hero-title">Discover Coffee's Journey</h2>
                <p className="hero-subtitle">
                  Explore the rich history and diverse flavors of coffee
                  <br />
                  from around the world!
                </p>
                <img
                  src="/coffee-animation.gif"
                  alt="Animated coffee gif"
                  className="coffee-gif"
                />
              </div>
            </section>

            <section className="coffee-facts">
              <h2>Learn About Coffee Around the World</h2>
              <p>
                Did you know? Coffee originated in Ethiopia and has a rich history that spans the globe. 
                Click on the globe to explore more!
              </p>
            </section>
          </div>
        ) : (
          <GlobeApp />
        )}
      </main>
      <Footer />
    </div>
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

// Add your Login component here
const UserApp = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token'); // Remove token on logout
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Java Journey</h1>
        {user ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : null}
      </header>

      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Explore coffee facts and more!</p>
        </div>
      )}

      <Footer />
    </div>
  );
};
export default App;

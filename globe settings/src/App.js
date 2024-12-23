import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const coffeeHistory = {
    Ethiopia: "Ethiopia is the birthplace of coffee, discovered in the 9th century.",
    Brazil: "Brazil is the world's largest coffee producer since the 1800s.",
    Colombia: "Colombian coffee is known worldwide for its quality.",
    Vietnam: "Vietnam is the world's second-largest coffee producer.",
    Guatemala: "Guatemalan coffee is known for its complex flavors.",
    Indonesia: "Indonesian coffee history dates back to Dutch colonial times.",
    Costa_Rica: "Costa Rica is known for its high-quality Arabica beans.",
    Honduras: "Honduras produces primarily high-altitude Arabica beans.",
    India: "India grows both Arabica and Robusta coffee."
  };

  useEffect(() => {
    // Load world geography data
    fetch('https://unpkg.com/world-atlas/countries-50m.json')
      .then((res) => res.json())
      .then(({ features }) => {
        if (features) {
          setCountries({ features });
        } else {
          console.error("No features found in the data.");
          setCountries({ features: [] }); // Fallback to avoid undefined
        }
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
        setCountries({ features: [] }); // Fallback for error scenarios
      });
  }, []);

  const handleCountryClick = (country) => {
    const countryName = country.properties.name;
    // Format the name to match coffeeHistory keys
    const formattedName = countryName.replace(/\s+/g, '_');
    if (coffeeHistory[formattedName]) {
      setSelectedCountry({
        name: countryName,
        history: coffeeHistory[formattedName]
      });
    } else {
      setSelectedCountry({
        name: countryName,
        history: "No significant coffee history recorded for this country."
      });
    }
  };

  return (
    <div className="app">
      <h1>World Coffee History Explorer</h1>
      <div className="container">
        <div className="globe-container">
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            polygonsData={countries.features}
            polygonAltitude={0.01}
            polygonCapColor={() => 'rgba(200, 200, 200, 0.9)'}
            polygonSideColor={() => 'rgba(150, 150, 150, 0.8)'}
            polygonStrokeColor={() => '#111'}
            polygonLabel={({ properties: p }) =>
              `${p.name} ${coffeeHistory[p.name.replace(/\s+/g, '_')] ? '☕' : ''}`
            }
            onPolygonClick={({ properties }) => handleCountryClick({ properties })}
            polygonsTransitionDuration={300}
          />
        </div>
        <div className="info-panel">
          {selectedCountry ? (
            <>
              <h2>{selectedCountry.name}</h2>
              <div className="coffee-history">
                <p>{selectedCountry.history}</p>
              </div>
            </>
          ) : (
            <div className="initial-message">
              <h2>Welcome to Coffee History Explorer</h2>
              <p>Click on any country to learn about its coffee history.</p>
              <p>Countries with significant coffee history are highlighted when hovered.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

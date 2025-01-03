import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';

const WorldCoffeeExplorer = () => {
  const [countries, setCountries] = useState({ features: [] });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [globeReady, setGlobeReady] = useState(false);

  const coffeeHistory = {
    Ethiopia: "Ethiopia is the birthplace of coffee, discovered in the 9th century.",
    "Ivory Coast": "Ivory Coast is one of the largest Robusta coffee producers in Africa.",
    Kenya: "Kenyan coffee is known for its bright acidity and fruity flavors.",
    India: "India grows both Arabica and Robusta coffee.",
    Indonesia: "Indonesian coffee history dates back to Dutch colonial times.",
    Vietnam: "Vietnam is the world's second-largest coffee producer.",
    France: "France is known for its café culture and coffee roasting.",
    Greece: "Greece has a long history of coffee consumption.",
    Italy: "Italy is known for its espresso and coffee culture.",
    Turkey: "Turkish coffee is a traditional method of coffee preparation.",
    Yemen: "Yemen is one of the oldest coffee producers in the world.",
    Canada: "Canada is known for its coffee culture and coffee shops.",
    Mexico: "Mexico is known for its high-quality Arabica beans.",
    "United States of America": "The US is the world's largest consumer of coffee.",
    Brazil: "Brazil is the world's largest coffee producer since the 1800s.",
    Colombia: "Colombian coffee is known worldwide for its quality.",
    Cuba: "Cuban coffee is known for its strong and sweet flavor.",
    Guatemala: "Guatemalan coffee is known for its complex flavors.",
    Honduras: "Honduras produces primarily high-altitude Arabica beans.",
    "Costa Rica": "Costa Rica is known for its high-quality Arabica beans.",
    Peru: "Peruvian coffee is known for its mild and well-balanced flavor."
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        setGlobeReady(true);
      })
      .catch(error => console.error('Error loading countries:', error));
  }, []);

  const handleCountryClick = polygon => {
    const countryName = polygon.properties.NAME;
    setSelectedCountry({
      name: countryName,
      history: coffeeHistory[countryName] || "No significant coffee history recorded for this country."
    });
  };

  const getPolygonLabel = polygon => {
    const countryName = polygon.properties.NAME;
    const hasCoffeeHistory = coffeeHistory[countryName];
    return `${countryName} ${hasCoffeeHistory ? '☕' : ''}`;
  };

  const getPolygonColor = polygon => {
    const countryName = polygon.properties.NAME;
    return coffeeHistory[countryName] 
      ? 'rgba(210, 150, 90, 0.8)'
      : 'rgba(128, 128, 128, 0.3)';
  };

  return (
    <div className="app">
      <h1>World Coffee History Explorer</h1>
      <div className="container">
        <div className="globe-container">
          {globeReady && (
            <Globe
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              lineHoverPrecision={0}
              polygonsData={countries.features}
              polygonAltitude={0.01}
              polygonCapColor={getPolygonColor}
              polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
              polygonStrokeColor={() => '#111'}
              polygonLabel={getPolygonLabel}
              onPolygonClick={handleCountryClick}
              polygonsTransitionDuration={300}
              width={800}
              height={600}
              atmosphereColor="blue"
              atmosphereAltitude={0.1}
            />
          )}
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
              <p>Countries with coffee history are highlighted in brown.</p>
              <p>Look for the ☕ icon to identify coffee-producing countries!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldCoffeeExplorer;



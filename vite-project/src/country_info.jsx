import React, { useState, useEffect } from "react";
import "./CountryInfo.css";

const CountryInfo = ({ country }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const { name: countryName, continent } = country;
        const continentName = continent?.name.toLowerCase();
        const countryFile = countryName.toLowerCase().replace(/\s+/g, "");

        let data;
        switch (continentName) {
          case "africa":
            data = await importCountryData("africa", countryFile, countryName);
            break;
          case "europe":
            data = await importCountryData("europe", countryFile, countryName);
            break;
          case "asia":
            data = await importCountryData("asia", countryFile, countryName);
            break;
          case "north america":
            data = await importCountryData(
              "northAmerica",
              countryFile,
              countryName
            );
            break;
          case "south america":
            data = await importCountryData(
              "southAmerica",
              countryFile,
              countryName
            );
            break;
          default:
            data = { message: `No data available for ${countryName}.` };
        }

        setCountryData(data);
      } catch (error) {
        console.error("Error loading country data:", error);
        setCountryData({ message: "Failed to load country data." });
      } finally {
        setLoading(false);
      }
    };

    if (country && country.name && country.continent) {
      fetchCountryData();
    }
  }, [country]);

  const importCountryData = async (continent, countryFile, countryName) => {
    try {
      const { default: countryData } = await import(
        `../server/seeds/coffeeData/${continent}/${countryFile}.js`
      );
      return countryData;
    } catch (error) {
      console.error(
        `No data file found for ${countryName} in ${continent}.`,
        error
      );
      return { message: `No data available for ${countryName} in ${continent}.` };
    }
  };

  return (
    <div className="country-info-card">
      {loading ? (
        <p className="loading-message">Loading country data...</p>
      ) : countryData && countryData.message ? (
        <p className="error-message">{countryData.message}</p>
      ) : (
        <div>
          <h3 className="card-title">{country.name}</h3>
          <p className="card-subtitle">{country.continent.name}</p>
          <div className="card-content">
            <h4>Coffee History:</h4>
            <p>{countryData.coffeeHistory?.discovery}</p>
            <p>{countryData.coffeeHistory?.culturalSignificance}</p>

            <h4>Regional Preparations:</h4>
            {countryData.regionalPreparations?.traditional &&
              countryData.regionalPreparations.traditional.map((item, index) => (
                <div key={index}>
                  <strong>{item.name}:</strong> {item.description}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;

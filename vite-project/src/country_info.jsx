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
  }, [country]); // Re-run effect when `country` prop changes

  console.log(country);

  const renderCulturalSignificance = (culturalSignificance) => { 
    if (culturalSignificance) {
      return (
        <div>
          <h4>Cultural Significance</h4>
          {culturalSignificance.traditions && (
            <div>
              <h5>Traditions</h5>
              <p>{culturalSignificance.traditions}</p>
            </div>
          )}
          {culturalSignificance.modern && (
            <div>
              <h5>Modern</h5>
              <p>{culturalSignificance.modern}</p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };
  

  const renderRegionalPreparations = (regionalPreparations) => {
    if (regionalPreparations && Array.isArray(regionalPreparations)) {
      return (
        <div>
          <h4>Regional Preparations</h4>
          {regionalPreparations.length > 0 ? (
            regionalPreparations.map((prep, index) => (
              <div key={index}>
                {prep.name && <h5>{prep.name}</h5>}
                {prep.description && <p>{prep.description}</p>}
              </div>
            ))
          ) : (
            <p>No regional preparations available.</p>
          )}
        </div>
      );
    }
    return null;
  };
  
  
  const renderInterestingFacts = (interestingFacts) => {
    if (interestingFacts) {
      return (
        <div>
          <h4>Interesting Facts</h4>
          {Object.entries(interestingFacts).map(([category, facts], index) => (
            <div key={index}>
              <h5>{category.charAt(0).toUpperCase() + category.slice(1)}</h5>
              {Array.isArray(facts) && facts.length > 0 ? (
                facts.map((fact, i) => <p key={i}>{fact}</p>)
              ) : (
                <p>{facts}</p> // If the category is not an array (like "export" in the second example)
              )}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  

  const renderBrewingMethods = (brewingMethods) => {
    if (!brewingMethods) return null;
  
    return (
      <div>
        <h4>Brewing Methods</h4>
  
        {Array.isArray(brewingMethods.traditional) ? (
            <div>
                <h5>Traditional Brewing Methods</h5>
                {brewingMethods.traditional.map((method, index) => (
                    <p key={index}>{method.name}: {method.description}</p>
                ))}
            </div>
        ) : (
            brewingMethods.traditional && (
                <div>
                  <h5>Traditional Brewing Methods</h5>
                  <p>{brewingMethods.traditional}</p>
                </div>
          )
        )}
  
        {brewingMethods.modern && (
          <div>
            <h5>Modern Brewing Methods</h5>
            <p>{brewingMethods.modern}</p>
          </div>
        )}
      </div>
    );
  };
  
  const renderBeanProduction = (beanProduction) => {
    if (!beanProduction) return null;
  
    return (
      <div>
        <h4>Bean Production</h4>
  
        {beanProduction.flavorProfiles && (
          <div>
            <h5>Flavor Profiles</h5>
            <p>{beanProduction.flavorProfiles}</p>
          </div>
        )}
  
        {beanProduction.regions && beanProduction.regions.length > 0 && (
          <div>
            <h5>Regions</h5>
            <ul>
              {beanProduction.regions.map((regionData, index) => (
                <li key={index}>
                  <p>{regionData.region}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };  

  const renderCoffeeCulture = (coffeeCulture) => {
    if (!coffeeCulture) return null;
  
    return (
      <div>
        <h4>Coffee Culture</h4>
  
        {coffeeCulture.traditions && (
          <div>
            <h5>Traditions</h5>
            <p>{coffeeCulture.traditions}</p> 
          </div>
        )}
  
        {coffeeCulture.socialSignificance && (
          <div>
            <h5>Social Significance</h5>
            <p>{coffeeCulture.socialSignificance}</p>
          </div>
        )}
      </div>
    );
  };

  const renderOutput = (output) => {
    if (!output || !output.percentage) return null;
  
    return (
      <div>
        <h4>Output</h4>
        <p>{output.percentage}</p> 
      </div>
    );
  };
  
    

  return (
    <div>
      {countryData ? (
        <div>
        <h3>Country Information</h3>
        {renderOutput(countryData.output)}
        {renderCoffeeCulture(countryData.coffeeCulture)}
        {renderBeanProduction(countryData.beanProduction)}
        {renderBrewingMethods(countryData.brewingMethods)}
        {renderCulturalSignificance(countryData.culturalSignificance)}
        {renderRegionalPreparations(countryData.regionalPreparations)}
        {renderInterestingFacts(countryData.interestingFacts)}
      </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  );
};

export default CountryInfo;

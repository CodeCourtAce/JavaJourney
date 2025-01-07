import React, { useState, useEffect } from "react";
import "./CountryInfo.css"; // Include this CSS file for styling

// This component accepts a `country` object with `name` and `continent.name`
const CountryInfo = ({ country }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      let data;
      try {
        // Extract country and continent from the props
        const { name: countryName, continent } = country;
        const continentName = continent?.name.toLowerCase(); // Get the continent name in lowercase
        const countryFile = countryName.toLowerCase().replace(/\s+/g, ""); // Normalize the country name (e.g., remove spaces)

        console.log(continentName);
        console.log(countryFile);

        // Dynamically import the correct file based on continent and country name
        switch (continentName) {
          case "africa":
            try {
              const { default: africaCountryData } = await import(
                `../server/seeds/coffeeData/africa/${countryFile}.js`
              );
              data = africaCountryData;
            } catch (error) {
              console.error(
                `No data file found for ${countryName} in Africa.`
              );
              data = { message: `No data available for ${countryName} in Africa.` };
            }
            break;
          case "europe":
            try {
              const { default: europeCountryData } = await import(
                `../server/seeds/coffeeData/europe/${countryFile}.js`
              );
              data = europeCountryData;
            } catch (error) {
              console.error(
                `No data file found for ${countryName} in Europe.`
              );
              data = { message: `No data available for ${countryName} in Europe.` };
            }
            break;
          case "asia":
            try {
              const { default: asiaCountryData } = await import(
                `../server/seeds/coffeeData/asia/${countryFile}.js`
              );
              data = asiaCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in Asia.`);
              data = { message: `No data available for ${countryName} in Asia.` };
            }
            break;
          case "north america":
            try {
              const { default: naCountryData } = await import(
                `../server/seeds/coffeeData/northAmerica/${countryFile}.js`
              );
              data = naCountryData;
            } catch (error) {
              console.error(
                `No data file found for ${countryName} in North America.`
              );
              data = { message: `No data available for ${countryName} in North America.` };
            }
            break;
          case "south america":
            try {
              const { default: saCountryData } = await import(
                `../server/seeds/coffeeData/southAmerica/${countryFile}.js`
              );
              data = saCountryData;
            } catch (error) {
              console.error(
                `No data file found for ${countryName} in South America.`
              );
              data = { message: `No data available for ${countryName} in South America.` };
            }
            break;
          default:
            data = { message: `No data available for ${countryName}.` };
        }

        setCountryData(data);
      } catch (error) {
        console.error("Error loading country data:", error);
        setCountryData({ message: "Failed to load country data." });
      }
    };

    // Fetch country data whenever the country prop changes
    if (country && country.name && country.continent) {
      fetchCountryData();
    }
  }, [country]); // Re-run effect when `country` prop changes

  const renderCard = (title, content) => {
    if (!content) return null;
    return (
      <div className="card">
        <h3>{title}</h3>
        {content}
      </div>
    );
  };

  const renderBeanProduction = (beanProduction) =>
    beanProduction ? (
      <>
        {beanProduction.flavorProfiles && (
          <p>
            <strong>Flavor Profiles:</strong> {beanProduction.flavorProfiles}
          </p>
        )}
        {beanProduction.regions && (
          <ul>
            {beanProduction.regions.map((region, index) => (
              <li key={index}>{region.region}</li>
            ))}
          </ul>
        )}
      </>
    ) : null;

  const renderBrewingMethods = (brewingMethods) =>
    brewingMethods ? (
      <>
        {brewingMethods.traditional && Array.isArray(brewingMethods.traditional) ? (
          <div>
            <strong>Traditional:</strong>
            <ul>
              {brewingMethods.traditional.map((method, index) => (
                <li key={index}>
                  <strong>{method.name}:</strong> <p>{method.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          brewingMethods.traditional && (
            <div>
              <strong>Traditional:</strong> <p>{brewingMethods.traditional}</p>
            </div>
          )
        )}
        {brewingMethods.modern && (
          <div>
            <strong>Modern:</strong> <p>{brewingMethods.modern}</p>
          </div>
        )}
      </>
    ) : null;

  const renderCoffeeCulture = (coffeeCulture) =>
    coffeeCulture ? (
      <>
        {coffeeCulture.traditions && (
          <p>
            <strong>Traditions:</strong> {coffeeCulture.traditions}
          </p>
        )}
        {coffeeCulture.socialSignificance && (
          <p>
            <strong>Social Significance:</strong>{" "}
            {coffeeCulture.socialSignificance}
          </p>
        )}
      </>
    ) : null;

  const renderInterestingFacts = (interestingFacts) =>
    interestingFacts ? (
      <>
        {Object.entries(interestingFacts).map(([key, facts], index) => (
          <div key={index}>
            <strong>{key}:</strong> <p>{facts}</p>
          </div>
        ))}
      </>
    ) : null;

  return (
    <div className="country-info-container">
      {countryData ? (
        <>
          {renderCard("Bean Production", renderBeanProduction(countryData.beanProduction))}
          {renderCard("Brewing Methods", renderBrewingMethods(countryData.brewingMethods))}
          {renderCard("Coffee Culture", renderCoffeeCulture(countryData.coffeeCulture))}
          {renderCard("Interesting Facts", renderInterestingFacts(countryData.interestingFacts))}
        </>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  );
};

export default CountryInfo;

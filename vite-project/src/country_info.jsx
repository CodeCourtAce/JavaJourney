import React, { useState, useEffect } from 'react';

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
        const countryFile = countryName.toLowerCase().replace(/\s+/g, ''); // Normalize the country name (e.g., remove spaces)

        console.log(continentName)
        console.log(countryFile)

        // Dynamically import the correct file based on continent and country name
        // Example: If country is "Ethiopia" and continent is "Africa", we load "africa/ethiopia.js"
        switch (continentName) {
          case 'africa':
            try {
              // Check if the country data file exists in the continent folder (e.g., africa/ethiopia.js)
              const { default: africaCountryData } = await import(`../server/seeds/coffeeData/africa/${countryFile}.js`);
              data = africaCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in Africa.`);
              data = { message: `No data available for ${countryName} in Africa.` };
            }
            break;
          case 'europe':
            try {
              const { default: europeCountryData } = await import(`../server/seeds/coffeeData/europe/${countryFile}.js`);
              data = europeCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in Europe.`);
              data = { message: `No data available for ${countryName} in Europe.` };
            }
            break;
          case 'asia':
            try {
              const { default: europeCountryData } = await import(`../server/seeds/coffeeData/asia/${countryFile}.js`);
              data = europeCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in Asia.`);
              data = { message: `No data available for ${countryName} in Asia.` };
            }
            break;
          case 'north america':
            try {
              const { default: europeCountryData } = await import(`../server/seeds/coffeeData/northAmerica/${countryFile}.js`);
              data = europeCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in North America.`);
              data = { message: `No data available for ${countryName} in North America.` };
            }
            break;
          case 'south america':
            try {
              const { default: europeCountryData } = await import(`../server/seeds/coffeeData/southAmerica/${countryFile}.js`);
              data = europeCountryData;
            } catch (error) {
              console.error(`No data file found for ${countryName} in South America.`);
              data = { message: `No data available for ${countryName} in South America.` };
            }
            break;
          // Default case if no matching continent is found
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

  return (
    <div>
      {countryData ? (
        <div>
          <h3>Country Information</h3>
          <pre>{JSON.stringify(countryData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  );
};

export default CountryInfo;

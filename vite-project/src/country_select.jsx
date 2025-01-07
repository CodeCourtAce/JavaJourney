import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import CountryInfo from './country_info';
import './App.css'; // Make sure the styles are applied

// Initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

// GraphQL query to fetch countries' names and codes
const LIST_COUNTRIES = gql`
  {
    countries(filter: { code: { in: ["US", "CA", "MX", "ET", "CI", "KE", "IN", "ID", "FR", "GR", "IT", "TR", "YE", "BR", "CO", "CU", "HN", "PE", "VN"] } }) {
      name
      code
      continent { 
      name 
      code
      }
    }
  }
`;

const CountrySelect = () => {
  const [country, setCountry] = useState('US');
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  //creates new array of countries sorted by name over code
  const sortedCountries = [...data.countries].sort((a, b) => a.name.localeCompare(b.name))

  const selectedCountryData = data.countries.find(c => c.code === country);

  return (
    <div>
      <select
        className="country-selector"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      >
        {sortedCountries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>

      {/* Pass the selected country code to the CountryInfo component */}
      <CountryInfo country={selectedCountryData} />
    </div>
  );
};

export default CountrySelect;

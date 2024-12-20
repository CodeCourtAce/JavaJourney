import React, { useState } from 'react'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client'

// Initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com', // The GraphQL API URL
})

// GraphQL query to fetch countries' names and codes
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`

// Create a component that renders a select input for countries
const CountrySelect = () => {
  const [country, setCountry] = useState('US')
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  // catchs for errors or loading
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  //creates new array of countries sorted by name over code
  const sortedCountries = [...data.countries].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <select value={country} onChange={(event) => setCountry(event.target.value)}>
      {sortedCountries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  )
}

export default CountrySelect

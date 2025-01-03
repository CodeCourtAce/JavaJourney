
import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type CoffeeRegion {
        _id: ID
        countryCode: String
        country: String
        output: Output
        coffeeHistory: CoffeeHistory
        beanProduction: BeanProduction
        brewingMethods: BrewingMethods
        culturalSignificance: CulturalSignificance
        regionalPreparations: RegionalPreparations
        interestingFacts: InterestingFacts
    }

    type Output {
        percentage: String
    }

    type CoffeeHistory {
        discovery: String
        development: String
    }

    type BeanProduction {
        flavorProfiles: String
        regions: [String]
    }

    type BrewingMethods {
        traditional: String
        modern: String
    }

    type CulturalSignificance {
        historical: String
        modern: String
    }

    type RegionalPreparations {
        traditional: [String]
        modern: [String]
        traditions: [String]
        socialLife: String
    }

    type InterestingFacts {
        traditions: [String]
        socialLife: String
    }

    type Query {
        getAllRegions: [CoffeeRegion]
        getRegionByCountryCode(countryCode: String!): CoffeeRegion
        getRegionByCountry(country: String!): CoffeeRegion
    }
`;

export default typeDefs;
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// I believe this is where we will match the API data to the schema
const coffeeRegionSchema = new Schema({
    countryCode: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true,
    },
    output: {
        percentage: String
    },
    coffeeHistory: {
        discovery: String,
        development: String,
    },
    beanProduction: {
        flavorProfiles: String,
        regions: [String]
    },
    brewingMethods: {
        traditional: String,
        modern: String
    },
    culturalSignificance: {
        historical: String,
        modern: String
    },
    regionalPreparations: {
        traditional: [String],
        modern: [String],
        traditions: [String],
        socialLife: String
    },
    interestingFacts: {
        traditions: [String],
        socialLife: String
    }
});

const CoffeeRegion = model('CoffeeRegion', coffeeRegionSchema);
export default CoffeeRegion;
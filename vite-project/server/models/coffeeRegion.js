const { Schema, model } = require('mongoose');
const { beanProduction } = require('../seeds/coffeeData/asia/india');

// I believe this is where we will match the API data to the schema
const coffeeRegionSchema = new Schema({
    countryCode: {
        type: String,
        requireds: true,
        unique: true
    },
    country: {
        type: String,
        requireds: true,
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
const { Schema, model } = require('mongoose');

// I believe this is where we will match the API data to the schema
const coffeeRegionSchema = new Schema({
    country: {
        type: String,
        requireds: true,
        unique: true
    },
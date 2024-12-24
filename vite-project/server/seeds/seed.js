
import db from '../config/connection.js';
import CoffeeRegion from '../models/coffeeRegion.js';

import ethiopia from './ethiopia.js';
import ivoryCoast from './ivoryCoast.js';
import kenya from './kenya.js';
import india from './india.js';
import indonesia from './indonesia.js';
import vietnam from './vietnam.js';
import france from './france.js';
import greec from './greec.js';
import italy from './italy.js';
import turkey from './turkey.js';
import yeemen from './yeemen.js';
import canada from './canada.js';
import mexico from './mexico.js';
import unitedStates from './unitedStates.js';
import brazil from './brazil.js';
import colombia from './colombia.js';
import cuba from './cuba.js';
import honduras from './honduras.js';
import peru from './peru.js';

const seedDatabase = async () => {
    try {
        await CoffeeRegion.deleteMany({});
        const regions = await CoffeeRegion.insertMany([
            ethiopia,
            ivoryCoast,
            kenya,
            india,
            indonesia,
            vietnam,
            france,
            greec,
            italy,
            turkey,
            yeemen,
            canada,
            mexico,
            unitedStates,
            brazil,
            colombia,
            cuba,
            honduras,
            peru
        ]);
        console.log('Regions seeded!');
        console.log(`Added ${regions.length} coffee regions!`);
        process.exit(0);
    } catch (error) {
        console.error(error);
    }
};
db.once(`open`, () => {
    seedDatabase();
});
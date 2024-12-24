import db from '../config/connection.js';
import CoffeeRegion from '../models/coffeeRegion.js';

// Africa
import ethiopia from './coffeeData/africa/ethiopia.js';
import ivoryCoast from './coffeeData/africa/ivoryCoast.js';
import kenya from './coffeeData/africa/kenya.js';

// Asia
import india from './coffeeData/asia/india.js';
import indonesia from './coffeeData/asia/indonesia.js';
import turkey from './coffeeData/asia/turkey.js';
import vietnam from './coffeeData/asia/vietnam.js';
import yemen from './coffeeData/asia/yemen.js';

// Europe
import france from './coffeeData/europe/france.js';
import greece from './coffeeData/europe/greece.js';
import italy from './coffeeData/europe/italy.js';

// North America
import canada from './coffeeData/northAmerica/canada.js';
import mexico from './coffeeData/northAmerica/mexico.js';
import unitedStates from './coffeeData/northAmerica/unitedStates.js';

// South America
import brazil from './coffeeData/southAmerica/brazil.js';
import colombia from './coffeeData/southAmerica/colombia.js';
import cuba from './coffeeData/southAmerica/cuba.js';
import honduras from './coffeeData/southAmerica/honduras.js';
import peru from './coffeeData/southAmerica/peru.js';

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
            greece,
            italy,
            turkey,
            yemen,
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
        process.exit(1);
    }
};

db.once('open', () => {
    seedDatabase();
});
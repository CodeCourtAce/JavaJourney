
import { CoffeeRegion } from '../models';

const resolvers = {
  Query: {
    getAllRegions: async () => {
      try {
        return await CoffeeRegion.find({});
      } catch (err) {
        throw new Error('Error fetching coffee regions');
      }
    },
    getRegionByCountryCode: async (parent, { countryCode }) => {
      try {
        return await CoffeeRegion.findOne({ countryCode });
      } catch (err) {
        throw new Error('Error fetching coffee region by country code');
      }
    },
    getRegionByCountry: async (parent, { country }) => {
      try {
        return await CoffeeRegion.findOne({ country });
      } catch (err) {
        throw new Error('Error fetching coffee region by country');
      }
    }
  }
};

export default resolvers;


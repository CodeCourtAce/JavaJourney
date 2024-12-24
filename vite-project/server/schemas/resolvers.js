
const { CoffeeRegion } = require('./models');

const resolvers = {
    Query: {
        getAllRegions: async () => {
            return await CoffeeRegion.find({});
        } catch (err) {
            throw new Error(`Error fetching coffee regions: ${err}`);
        }
    },
        getRegionByCountryCode: async (parent, { countryCode }) => {
            return await CoffeeRegion.findOne({ countryCode });
        } catch (err) {
            throw new Error(`Error fetching coffee region: ${err}`);
        }
    },
        getRegionByCountry: async (parent, { country }) => {
            return await CoffeeRegion.findOne({ country });
        } catch (err) {
            throw new Error(`Error fetching coffee region: ${err}`);
        }
    }
};

module.exports = resolvers;


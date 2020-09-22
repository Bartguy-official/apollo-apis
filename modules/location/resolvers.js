const sequelize = require("../../adapters/mysql");
const CountryModel = require("../../models/countries")(sequelize);
const CitiesModel = require("../../models/cities")(sequelize);
const StatesModel = require("../../models/states")(sequelize);
const _ = require("lodash");
const { query } = require("express");

const resolvers = {
  Query: {
    async getCountries() {
      const allCountries = await CountryModel.findAll({
        attributes: ["id", "name"],
      });

      return {
        data: allCountries,
      };
    },

    async getStates(_, args) {
      const queryOptions = {
        attributes: ["id", "name"],
      };

      if (args.countryId) {
        queryOptions.where = {
          country_id: args.countryId,
        };
      }

      const allStates = await StatesModel.findAll(queryOptions);

      return {
        data: allStates,
      };
    },

    async getCities(_, args) {
      const queryOptions = {
        attributes: ["id", "name"],
      };

      if (args.stateId) {
        queryOptions.where = {
          state_id: args.stateId,
        };
      }

      const allCities = await CitiesModel.findAll(queryOptions);

      return {
        data: allCities,
      };
    },
  },
};
module.exports = resolvers;

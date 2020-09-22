const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    getCountries: CountryData
    getStates(countryId: Int): StatesData
    getCities(stateId: Int!): CitiesData
  }
  type standardOutput {
    id: Int
    name: String
  }

  type CountryData {
    data: [standardOutput]
  }

  type StatesData {
    data: [standardOutput]
  }

  type CitiesData {
    data: [standardOutput]
  }

  type File {
    name: String!
    mimetype: String!
    encoding: String!
  }
`;

module.exports = typeDefs;

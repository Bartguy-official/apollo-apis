const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Upload
  type Files {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [Files]
  }

  type Mutation {
    singleUpload(file: Upload!): Files!
  }
`;

module.exports = typeDefs;

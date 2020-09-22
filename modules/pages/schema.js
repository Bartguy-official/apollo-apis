const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    getPageData(pageName: String!): PageData
  }
type Document {
    title: String
    description: String
  }
  type PageData {
    data: Document
  }
  
`;

module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
}

type Order {
    _id: ID
    orderDate: String
    qauntity: Int
    products: [Product]
}

type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

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
    orderText: String
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
    user(_id: ID!): User
    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addProduct(
      name: String!
      description: String!
      image: String!
      price: Float!
    ): Product
    addOrder(orderText: String!): Order
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(
      _id: ID!
      name: String
      description: String
      image: String
      price: Float
      ): Product
  }
`;

module.exports = typeDefs;

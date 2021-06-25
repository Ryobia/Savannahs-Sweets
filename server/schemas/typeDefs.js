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
    quantity: Int
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
    products: [Product]
    product:(_id: ID!): Product
    order(_id: ID!): Order
    orders: [Order]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    userUpdate(firstName: String, lastName: String, email: String, password: String): User
    
}
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

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
`;

module.exports = typeDefs;

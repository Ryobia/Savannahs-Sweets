import gql from "graphql-tag";


export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      image
      price
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query product($_id: ID!) {
    products(_id: $_id) {
      _id
    name
    description
    image
    price
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      firstName
      lastName
      email
      orders {
        _id
        orderdate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;


export const QUERY_USERS = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      firstName
      lastName
      email
      orders {
        _id
        orderDate
        products{
          _id
          name
          description
          image
          price
        }
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
{
  users {
    _id
    firstName
    lastName
    email
  }
}
`;

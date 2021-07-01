import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID! $firstName: String, $lastName: String, $email: String, $password: String) {
    updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $description: String! $image: String!, $price: Float!) {
    addProduct(name: $name, description: $description, image: $image, price: $price) {
      name
      description
      image
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($_id: ID!, $name: String $description: String $image: String, $price: Float) {
    updateProduct(_id: $_id, name: $name, description: $description, image: $image, price: $price) {
      _id
      name
      description
      image
      price
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($orderText: String!) {
    addOrder(orderText: $orderText) {
    _id
    orderDate
    orderText
  }
}
`;



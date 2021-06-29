import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './components/Home';
import About from './pages/About';
import Login from './pages/Login';
import Order from './components/Order';
import OrderOverlay from './components/OrderOverlay';
import ProductList from './components/ProductList';
import Signup from './pages/Signup';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
   <div>
     <Home></Home>
     <About></About>
     <Order></Order>
     <Login></Login>
     <Signup></Signup>
     <ProductList></ProductList>
     <OrderOverlay></OrderOverlay>
   </div>
   </ApolloProvider>
  );
}

export default App;

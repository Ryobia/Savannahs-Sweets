import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Logo from './components/Logo';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Order from './components/Order';
import OrderOverlay from './components/OrderOverlay';

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
   <div>
     <Logo></Logo>
     <Home></Home>
     <About></About>  
     <Order></Order>
     <Login></Login>
     <OrderOverlay></OrderOverlay>
   </div>
  );
}

export default App;

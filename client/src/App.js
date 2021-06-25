import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Home from './components/Home';
import Nav from "./components/Nav";
import About from './pages/About';
import Login from './pages/Login';
import Order from './components/Order';
import Product from "./components/Product";
import RecentOrders from './components/RecentOrders';
import OrderOverlay from './components/OrderOverlay';
import ProductList from './components/ProductList';
import Signup from './pages/Signup';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  const [currentpage, setCurrentPage] = useState("home");

  function renderPage() {
    switch (currentpage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'order':
        return <Order />;
      case 'recent':
        return <RecentOrders />;
      case 'products':
        return <Product />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  }

  return (
    <ApolloProvider client={client}>
      <div>
          <Nav currentpage={currentpage} setCurrentPage={setCurrentPage}></Nav>
          <main>
            {renderPage()}
          </main>
          {/* <OrderOverlay></OrderOverlay> */}
      </div>
    </ApolloProvider>
  );
}

export default App;

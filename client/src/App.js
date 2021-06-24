import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { StoreProvider } from "./utils/GlobalState";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Order from "./components/Order";
import OrderOverlay from "./components/OrderOverlay";
import Products from "./components/Products";
import RecentOrders from "./components/RecentOrders";
import Nav from "./components/Nav";

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
        return <Products />;
      case 'login':
        return <Login />;
      default:
        return <Home />;
    }
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <StoreProvider>
          <Nav currentpage={currentpage} setCurrentPage={setCurrentPage}></Nav>
          <main>
            {renderPage()}
          </main>
          <OrderOverlay></OrderOverlay>
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;

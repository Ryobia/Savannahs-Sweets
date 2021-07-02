import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS } from "../utils/queries";

function RecentOrders() {
    const { data } = useQuery(QUERY_USERS);
  let user;

  if (data) {
    user = data.user;
  }

    return (
      <>
      <div className="container">
        <h2>My Recent Orders</h2>
        {user ? (
          <>
            <h2>Order History for {user.firstName} {user.lastName}</h2>
            {user.orders.map((order) => (
              <div key={order._id}>
                <h3>{new Date(parseInt(order.orderDate)).toLocaleDateString()}</h3>
                <div className="flex-row">
                  {order.products.map(({ _id, orderText }, index) => (
                    <div key={index}>
                        <p>{orderDate}: {orderText}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>
    );
  };
  
  export default RecentOrders;
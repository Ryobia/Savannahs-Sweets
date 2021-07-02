import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from "../utils/queries";

function RecentOrders() {
  const { data } = useQuery(QUERY_ME);
  let user;

  if (data) {
    user = data.me;
  }

  if (!data) {
    return (
      <div>
        No orders yet!
      </div>
    )
  }
  console.log(user);

    return (
      <>
      <div className="recent-orders">
        <h2>My Recent Orders</h2>
        {user ? (
          <>
            {user.orders.map((order) => (
              <div key={order._id}>
                <p>{new Date(parseInt(order.orderDate)).toLocaleDateString()}: {order.orderText}</p>
              </div>
            ))}
          </>
        ) : null}

      </div>

    </>
    );
  };
  
  export default RecentOrders;
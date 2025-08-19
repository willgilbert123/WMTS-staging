import React from 'react';
import sampleData from '../data/sampleData';

function Orders() {
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {sampleData.orders.map((order, i) => (
          <li key={i}>{order.item} - {order.status} (Due: {order.due})</li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
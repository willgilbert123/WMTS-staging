import React from 'react';
import sampleData from '../data/sampleData';

function Inventory() {
  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {sampleData.filaments.map((item, i) => (
          <li key={i}>
            <span style={{color: item.color}}>&#9679;</span> {item.material} - {item.brand} ({item.weight}g)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
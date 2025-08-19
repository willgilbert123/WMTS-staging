import React from 'react';
import sampleData from '../data/sampleData';

function Printers() {
  return (
    <div>
      <h2>Printers</h2>
      <ul>
        {sampleData.printers.map((printer, i) => (
          <li key={i}>{printer.name} - Nozzles: {printer.nozzles.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
}

export default Printers;
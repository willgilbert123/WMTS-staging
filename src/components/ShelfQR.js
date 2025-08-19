import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import sampleData from '../data/sampleData';

function ShelfQR() {
  return (
    <div>
      <h2>Shelf QR Codes</h2>
      {sampleData.shelves.map((shelf, i) => (
        <div key={i}>
          <p>Shelf: {shelf.code}</p>
          <QRCodeCanvas value={shelf.code} />
        </div>
      ))}
    </div>
  );
}

export default ShelfQR;
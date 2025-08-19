import React from 'react';

function Header({ setTab }) {
  return (
    <div className="header">
      <h1>Willie G's Material Tracker System</h1>
      <p><i>"Track smart. Print strong."</i></p>
      <nav>
        <button onClick={() => setTab('inventory')}>Inventory</button>
        <button onClick={() => setTab('printers')}>Printers</button>
        <button onClick={() => setTab('orders')}>Orders</button>
        <button onClick={() => setTab('qrcodes')}>QR Codes</button>
      </nav>
    </div>
  );
}

export default Header;
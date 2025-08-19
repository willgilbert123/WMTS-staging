import React, { useState } from 'react';
import Inventory from './components/Inventory';
import Printers from './components/Printers';
import Orders from './components/Orders';
import ShelfQR from './components/ShelfQR';
import Header from './components/Header';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [tab, setTab] = useState('inventory');

  const checkPassword = () => {
    if (password === 'Entei') setAuthenticated(true);
    else alert('Incorrect password');
  };

  if (!authenticated) {
    return (
      <div className="login">
        <h2>Enter Password</h2>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={checkPassword}>Login</button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header setTab={setTab} />
      {tab === 'inventory' && <Inventory />}
      {tab === 'printers' && <Printers />}
      {tab === 'orders' && <Orders />}
      {tab === 'qrcodes' && <ShelfQR />}
    </div>
  );
}

export default App;
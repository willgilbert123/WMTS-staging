import React, { useState } from 'react'
import Inventory from './components/Inventory'
import ToOrder from './components/ToOrder'
import Printers from './components/Printers'
import QRCodeView from './components/QRCodeView'

function App() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [tab, setTab] = useState('inventory')

  const checkLogin = () => {
    if (password === 'Entei') setAuthenticated(true)
    else alert('Wrong password')
  }

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">WMTS Login</h1>
        <input
          type="password"
          className="border px-3 py-2 mb-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={checkLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Willie G’s Material Tracker System</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setTab('inventory')} className="px-4 py-2 bg-gray-200 rounded">Inventory</button>
        <button onClick={() => setTab('toorder')} className="px-4 py-2 bg-gray-200 rounded">To Order</button>
        <button onClick={() => setTab('printers')} className="px-4 py-2 bg-gray-200 rounded">Printers</button>
        <button onClick={() => setTab('qrcodes')} className="px-4 py-2 bg-gray-200 rounded">QR Codes</button>
      </div>
      {tab === 'inventory' && <Inventory />}
      {tab === 'toorder' && <ToOrder />}
      {tab === 'printers' && <Printers />}
      {tab === 'qrcodes' && <QRCodeView />}
    </div>
  )
}

export default App
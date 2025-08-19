import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import QRCode from 'qrcode.react'

const fakeMaterials = [
  { id: 1, material: "PLA", brand: "Hatchbox", color: "Red", qty: 2, location: "Shelf A" },
  { id: 2, material: "PETG", brand: "Overture", color: "Blue", qty: 1, location: "Shelf B" },
  { id: 3, material: "ABS", brand: "eSun", color: "Black", qty: 3, location: "Shelf C" },
]

const fakePrinters = [
  { id: 1, name: "Prusa MK3", nozzle: "0.4mm" },
  { id: 2, name: "Ender 3", nozzle: "0.6mm" },
]

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">WMTS Staging</h1>
      <nav className="space-x-4">
        <Link to="/materials" className="text-blue-600">Materials</Link>
        <Link to="/printers" className="text-blue-600">Printers</Link>
      </nav>
    </div>
  )
}

function Materials() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Materials</h2>
      <ul>
        {fakeMaterials.map(m => (
          <li key={m.id} className="mb-2 p-2 bg-white rounded shadow">
            <span className="font-bold">{m.material}</span> - {m.brand} - {m.color} (x{m.qty}) [{m.location}]
            <div className="mt-2">
              <QRCode value={`Shelf: ${m.location}`} size={64} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Printers() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Printers</h2>
      <ul>
        {fakePrinters.map(p => (
          <li key={p.id} className="mb-2 p-2 bg-white rounded shadow">
            <span className="font-bold">{p.name}</span> - Nozzle: {p.nozzle}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/printers" element={<Printers />} />
      </Routes>
    </Router>
  )
}

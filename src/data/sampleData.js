const sampleData = {
  filaments: [
    { material: 'PLA', brand: 'Hatchbox', color: 'blue', weight: 1000 },
    { material: 'ABS', brand: 'Overture', color: 'red', weight: 750 }
  ],
  printers: [
    { name: 'Prusa i3 MK3S', nozzles: [0.4, 0.6] },
    { name: 'Ender 3 V2', nozzles: [0.4] }
  ],
  orders: [
    { item: 'PETG - Black', status: 'On Order', due: '2025-08-25' }
  ],
  shelves: [
    { code: 'Shelf-A' },
    { code: 'Shelf-B' }
  ]
};

export default sampleData;
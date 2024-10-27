import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function AutomatedPatrolRouteOptimization() {
  // Center the map on Miyapur, Hyderabad
  const hyderabadCenter = [17.4948, 78.3995];

  // Define patrol routes spread over a wider area around Miyapur
  const [routes] = useState([
    { id: 1, path: [[17.498, 78.410], [17.495, 78.405], [17.492, 78.400]], color: 'blue' },
    { id: 2, path: [[17.488, 78.402], [17.490, 78.396], [17.493, 78.390]], color: 'green' },
    { id: 3, path: [[17.500, 78.395], [17.496, 78.389], [17.492, 78.385]], color: 'red' },
    { id: 4, path: [[17.495, 78.412], [17.491, 78.407], [17.489, 78.400]], color: 'purple' },
    { id: 5, path: [[17.501, 78.402], [17.497, 78.396], [17.493, 78.393]], color: 'orange' },
  ]);

  // Define patrol units spread across a wider area
  const [patrolUnits] = useState([
    { id: 1, position: [17.498, 78.410], name: 'Unit A' },
    { id: 2, position: [17.488, 78.402], name: 'Unit B' },
    { id: 3, position: [17.500, 78.395], name: 'Unit C' },
    { id: 4, position: [17.495, 78.412], name: 'Unit D' },
    { id: 5, position: [17.501, 78.402], name: 'Unit E' },
  ]);

  return (
    <div className="automated-patrol-route-optimization">
      <h2>Automated Patrol Route Optimization</h2>
      <p>This interactive map demonstrates our automated system for generating optimal patrol routes based on real-time data and available police units.</p>
      
      <MapContainer center={hyderabadCenter} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Render patrol routes */}
        {routes.map((route) => (
          <Polyline key={route.id} positions={route.path} color={route.color} />
        ))}

        {/* Render patrol units as markers */}
        {patrolUnits.map((unit) => (
          <Marker key={unit.id} position={unit.position}>
            <Popup>{unit.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="optimization-details">
        <h3>How It Works:</h3>
        <ol>
          <li>Real-time data is collected and analyzed.</li>
          <li>High-risk areas are identified based on recent activities and historical data.</li>
          <li>Available police units are located and their current status is determined.</li>
          <li>An AI algorithm generates optimal routes for each unit, ensuring maximum coverage of high-risk areas.</li>
          <li>Routes are updated in real-time as new data becomes available or situations change.</li>
        </ol>
      </div>
    </div>
  );
}

export default AutomatedPatrolRouteOptimization;

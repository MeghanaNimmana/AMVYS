import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Icons
const executiveIcon = L.divIcon({
  className: 'custom-exec-icon',
  html: `<div style="background: #0284c7; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 0 15px rgba(2, 132, 199, 0.8);">
          <span style="font-size: 16px;">🛵</span>
        </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17]
});

const customerIcon = L.divIcon({
  className: 'custom-cust-icon',
  html: `<div style="background: #10b981; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 0 15px rgba(16, 185, 129, 0.8);">
          <span style="font-size: 16px;">🏠</span>
        </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17]
});

export const LiveMap = ({ executiveLat = 12.9716, executiveLng = 77.5946, customerLat = 12.9750, customerLng = 77.6010, etaMinutes = 14 }) => {
  const center = [(executiveLat + customerLat) / 2, (executiveLng + customerLng) / 2];
  const routePolyline = [
    [executiveLat, executiveLng],
    [12.9730, 77.5975],
    [customerLat, customerLng]
  ];

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl glass-card">
      {/* Overlay Status Badge */}
      <div className="absolute top-3 left-3 z-[1000] bg-slate-950/90 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2">
        <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
        <span className="text-xs font-bold text-slate-100">Live Delivery Route</span>
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
          ETA: {etaMinutes} Mins
        </span>
      </div>

      <MapContainer 
        center={center} 
        zoom={14} 
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Executive Marker */}
        <Marker position={[executiveLat, executiveLng]} icon={executiveIcon}>
          <Popup>
            <div className="p-1 text-slate-900 font-sans">
              <strong className="text-xs block">Delivery Partner: Rajesh Kumar</strong>
              <span className="text-[11px]">Speed: 24 km/h • Electric Scooter</span>
            </div>
          </Popup>
        </Marker>

        {/* Customer Destination Marker */}
        <Marker position={[customerLat, customerLng]} icon={customerIcon}>
          <Popup>
            <div className="p-1 text-slate-900 font-sans">
              <strong className="text-xs block">Customer Destination</strong>
              <span className="text-[11px]">Ananya Sharma • Apartment Safe Locker #14</span>
            </div>
          </Popup>
        </Marker>

        {/* Polyline Route */}
        <Polyline positions={routePolyline} color="#0284c7" weight={4} dashArray="8, 8" />
      </MapContainer>
    </div>
  );
};

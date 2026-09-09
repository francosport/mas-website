"use client";

import { useEffect, useState } from "react";
import type { MapPin } from "@/lib/jobs";

interface Props {
  pins: MapPin[];
  center: [number, number];
  zoom: number;
  height?: string;
}

export default function JobsMap({ pins, center, zoom, height = "420px" }: Props) {
  const [MapComponents, setMapComponents] = useState<{
    MapContainer: typeof import("react-leaflet")["MapContainer"];
    TileLayer: typeof import("react-leaflet")["TileLayer"];
    CircleMarker: typeof import("react-leaflet")["CircleMarker"];
    Popup: typeof import("react-leaflet")["Popup"];
  } | null>(null);

  useEffect(() => {
    // Leaflet and react-leaflet must be loaded client-side (they access window)
    Promise.all([
      import("leaflet/dist/leaflet.css" as string),
      import("react-leaflet"),
    ]).then(([, rl]) => {
      setMapComponents({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        CircleMarker: rl.CircleMarker,
        Popup: rl.Popup,
      });
    });
  }, []);

  if (!MapComponents) {
    return (
      <div className="w-full h-full bg-[#E2E6EC] animate-pulse flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading map…</p>
      </div>
    );
  }

  const { MapContainer, TileLayer, CircleMarker, Popup } = MapComponents;

  return (
    <div className="isolate w-full h-full">
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pins.map((pin, i) => (
        <CircleMarker
          key={i}
          center={[pin.map_lat, pin.map_lng]}
          radius={8}
          pathOptions={{
            color: "#D96B10",
            fillColor: "#F5821F",
            fillOpacity: 0.85,
            weight: 1.5,
          }}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-[#1B2A4A]">
                {pin.service_type ?? "Appliance Repair"}
              </p>
              <p className="text-gray-500">
                {pin.city}, {pin.state}
                {pin.completed_month ? ` · ${pin.completed_month}` : ""}
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
    </div>
  );
}

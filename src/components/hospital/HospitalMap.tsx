"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Hospital } from "@/lib/types";

// Fix default marker icons (broken by webpack bundling)
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const selectedIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  shadowSize: [49, 49],
  className: "selected-marker",
});

L.Marker.prototype.options.icon = defaultIcon;

function SetView({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], zoom);
  }, [map, lat, lng, zoom]);
  return null;
}

interface HospitalMapProps {
  hospitals: Hospital[];
  selectedHospitalId: string | null;
  onHospitalSelect?: (id: string) => void;
  /** Mini mode: single hospital marker, no controls, compact */
  mini?: boolean;
}

export default function HospitalMap({
  hospitals,
  selectedHospitalId,
  onHospitalSelect,
  mini = false,
}: HospitalMapProps) {
  const selected = hospitals.find((h) => h.id === selectedHospitalId);
  const center: [number, number] = selected
    ? [selected.lat, selected.lng]
    : [36.5, 127.5];
  const zoom = mini ? 14 : selected ? 12 : 7;

  return (
    <div className="w-full h-full relative">
      <style>{`
        .selected-marker {
          filter: hue-rotate(120deg) saturate(1.5);
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .leaflet-popup-content {
          margin: 12px 16px;
        }
        .mini-map .leaflet-control-zoom,
        .mini-map .leaflet-control-attribution {
          display: none;
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={zoom}
        className={`w-full h-full z-0 ${mini ? "mini-map" : ""}`}
        scrollWheelZoom={!mini}
        dragging={!mini}
        zoomControl={!mini}
        attributionControl={!mini}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mini && selected ? (
          <Marker
            position={[selected.lat, selected.lng]}
            icon={selectedIcon}
          />
        ) : (
          hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              position={[hospital.lat, hospital.lng]}
              icon={
                hospital.id === selectedHospitalId ? selectedIcon : defaultIcon
              }
              eventHandlers={{
                click: () => onHospitalSelect?.(hospital.id),
              }}
            >
              <Popup>
                <div className="min-w-[180px]">
                  <p className="font-semibold text-sm leading-tight">
                    {hospital.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {hospital.typeLabel} · {hospital.region}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {hospital.departments.length}개 진료과 ·{" "}
                    {hospital.languages.map((l) => l.label).join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))
        )}
        {selected && <SetView lat={selected.lat} lng={selected.lng} zoom={zoom} />}
      </MapContainer>
    </div>
  );
}

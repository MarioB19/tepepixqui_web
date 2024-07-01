import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Cargar dinámicamente componentes de @react-google-maps/api con SSR deshabilitado
const LoadScript = dynamic(() => import('@react-google-maps/api').then(mod => mod.LoadScript), { ssr: false });
const GoogleMap = dynamic(() => import('@react-google-maps/api').then(mod => mod.GoogleMap), { ssr: false });
const Marker = dynamic(() => import('@react-google-maps/api').then(mod => mod.Marker), { ssr: false });
const InfoWindow = dynamic(() => import('@react-google-maps/api').then(mod => mod.InfoWindow), { ssr: false });
const Circle = dynamic(() => import('@react-google-maps/api').then(mod => mod.Circle), { ssr: false });

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 20.6596988,
  lng: -103.3496092
};

const estaciones = [
    {
      id: 1,
      nombre: 'Estación 1',
      posicion: { lat: 20.6331250, lng: -103.5598250 }, // Ubicación especificada
      datos: {
        temperatura: '25°C',
        humedad: '60%',
        co2: '400 ppm',
        co: '10 ppm',
        humo: '0.05 mg/m3',
        viento: '15 km/h',
      },
    },
    {
      id: 2,
      nombre: 'Estación 2',
      posicion: { lat: 20.6241, lng: -103.4843 }, // Bosque de La Primavera
      datos: {
        temperatura: '26°C',
        humedad: '58%',
        co2: '410 ppm',
        co: '12 ppm',
        humo: '0.07 mg/m3',
        viento: '10 km/h',
      },
    },
    {
      id: 3,
      nombre: 'Estación 3',
      posicion: { lat: 20.6720, lng: -103.4857 }, // Cerca de Bosque de La Primavera
      datos: {
        temperatura: '24°C',
        humedad: '65%',
        co2: '420 ppm',
        co: '8 ppm',
        humo: '0.04 mg/m3',
        viento: '12 km/h',
      },
    },
  ];

export default function Mapa() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      setCustomIcon({
        url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        scaledSize: new window.google.maps.Size(40, 40),
      });
    }
  }, []);

  return (
    <section id="mapa" className="min-h-screen p-8 bg-gray-200 dark:bg-gray-700">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Mapa de Estaciones</h1>
        <p className="text-lg text-gray-700 text-center">El proyecto Tepepixqui utiliza estaciones con sensores para detectar tempranamente incendios forestales. Cada estación monitorea temperatura, humedad, niveles de CO2, CO, humo y velocidad del viento, y tiene un área de cobertura de 5 km a la redonda.</p>
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
        >
          {estaciones.map((estacion) => (
            <Marker
              key={estacion.id}
              position={estacion.posicion}
              icon={customIcon}
              onClick={() => {
                setSelectedStation(estacion);
              }}
            />
          ))}

          {estaciones.map((estacion) => (
            <Circle
              key={estacion.id}
              center={estacion.posicion}
              radius={5000} // Radio de 1 km
              options={{
                fillColor: 'rgba(135, 206, 250, 0.5)',
                strokeColor: 'rgba(0, 0, 255, 0.7)',
                strokeWeight: 1,
              }}
            />
          ))}

          {selectedStation && (
            <InfoWindow
              position={selectedStation.posicion}
              onCloseClick={() => {
                setSelectedStation(null);
              }}
            >
              <div>
                <h3 className="font-bold">{selectedStation.nombre}</h3>
                <p>Temperatura: {selectedStation.datos.temperatura}</p>
                <p>Humedad: {selectedStation.datos.humedad}</p>
                <p>CO2: {selectedStation.datos.co2}</p>
                <p>CO: {selectedStation.datos.co}</p>
                <p>Humo: {selectedStation.datos.humo}</p>
                <p>Viento: {selectedStation.datos.viento}</p>
                <p className="text-sm text-gray-700 mt-2">
                  Esta estación forma parte del sistema Tepepixqui para la detección temprana de incendios forestales.
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  );
}

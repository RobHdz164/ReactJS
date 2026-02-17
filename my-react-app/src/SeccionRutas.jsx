import { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer, Polyline } from '@react-google-maps/api';
import './SeccionRutas.css';

const containerStyle = {
    width: '100%',
    height: '450px'
};

const sucursales = [
    {
        nombre: "Ztarbooks Centro",
        lat: 19.432608,
        lng: -99.133209,
        color: "#E53935"
    },
    {
        nombre: "Ztarbooks Polanco",
        lat: 19.433722,
        lng: -99.190686,
        color: "#43A047"
    },
    {
        nombre: "Ztarbooks Condesa",
        lat: 19.411311,
        lng: -99.174544,
        color: "#1E88E5"
    },
    {
        nombre: "Ztarbooks Santa Fe",
        lat: 19.366186,
        lng: -99.274588,
        color: "#8E24AA"
    },
    {
        nombre: "Ztarbooks Coyoacan",
        lat: 19.350080,
        lng: -99.162030,
        color: "#FB8C00"
    },
    {
        nombre: "Ztarbooks Roma Norte",
        lat: 19.419068,
        lng: -99.162419,
        color: "#00ACC1"
    },
];

// Función para crear un marcador SVG con color personalizado
const crearIconoMarcador = (color, numero) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50">
            <path d="M20 0 C9 0 0 9 0 20 C0 35 20 50 20 50 C20 50 40 35 40 20 C40 9 31 0 20 0 Z" fill="${color}" stroke="#fff" stroke-width="2"/>
            <circle cx="20" cy="18" r="12" fill="#fff"/>
            <text x="20" y="23" text-anchor="middle" font-size="14" font-weight="bold" fill="${color}">${numero}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

function SeccionRutas() {
    const [ubicacionActual, setUbicacionActual] = useState(null);
    const [rutas, setRutas] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    // Obtener ubicación actual
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacionActual({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (err) => {
                console.error('Error obteniendo ubicación:', err);
                setError('No se pudo obtener tu ubicación. Por favor, permite el acceso.');
                setCargando(false);
            },
            { enableHighAccuracy: true }
        );
    }, []);

    // Calcular rutas a todas las sucursales
    const calcularRutas = useCallback(async () => {
        if (!ubicacionActual || !isLoaded) return;
        if (typeof google === 'undefined' || !google.maps) {
            setError('Google Maps no está disponible.');
            setCargando(false);
            return;
        }

        const directionsService = new google.maps.DirectionsService();
        const rutasCalculadas = [];

        for (const sucursal of sucursales) {
            try {
                const result = await new Promise((resolve, reject) => {
                    directionsService.route(
                        {
                            origin: ubicacionActual,
                            destination: { lat: sucursal.lat, lng: sucursal.lng },
                            travelMode: google.maps.TravelMode.DRIVING,
                        },
                        (response, status) => {
                            if (status === google.maps.DirectionsStatus.OK) {
                                resolve(response);
                            } else {
                                reject(new Error(`Error calculando ruta a ${sucursal.nombre}`));
                            }
                        }
                    );
                });
                rutasCalculadas.push({
                    directions: result,
                    color: sucursal.color,
                    nombre: sucursal.nombre
                });
            } catch (err) {
                console.error(err);
            }
        }

        setRutas(rutasCalculadas);
        setCargando(false);
    }, [ubicacionActual, isLoaded]);

    useEffect(() => {
        if (ubicacionActual && isLoaded) {
            calcularRutas();
        }
    }, [ubicacionActual, isLoaded, calcularRutas]);

    if (loadError) return <div className="seccion-rutas-error">Error al cargar el mapa</div>;
    if (!isLoaded) return <div className="seccion-rutas-cargando">Cargando mapa...</div>;
    if (error) return <div className="seccion-rutas-error">{error}</div>;
    if (cargando) return <div className="seccion-rutas-cargando">Calculando rutas a sucursales...</div>;

    return (
        <div className="seccion-rutas-container">
            <div className="seccion-rutas-header">
                <h2>Rutas a Nuestras Sucursales</h2>
                <p>Desde tu ubicación actual a todas las sucursales Ztarbooks</p>
            </div>
            
            <div className="seccion-rutas-content">
                <div className="seccion-rutas-mapa">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={ubicacionActual}
                        zoom={12}
                    >
                        {/* Líneas directas desde ubicación actual a cada sucursal */}
                        {sucursales.map((sucursal, index) => (
                            <Polyline
                                key={`linea-${index}`}
                                path={[
                                    ubicacionActual,
                                    { lat: sucursal.lat, lng: sucursal.lng }
                                ]}
                                options={{
                                    strokeColor: sucursal.color,
                                    strokeOpacity: 0.7,
                                    strokeWeight: 3,
                                    geodesic: true,
                                }}
                            />
                        ))}

                        {/* Marcador de ubicación actual (punto central) */}
                        <Marker
                            position={ubicacionActual}
                            icon={{
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 12,
                                fillColor: '#1e3c5a',
                                fillOpacity: 1,
                                strokeColor: '#ffffff',
                                strokeWeight: 3,
                            }}
                            title="Tu ubicación"
                            zIndex={1000}
                        />

                        {/* Marcadores de sucursales con colores únicos */}
                        {sucursales.map((sucursal, index) => (
                            <Marker
                                key={index}
                                position={{ lat: sucursal.lat, lng: sucursal.lng }}
                                icon={{
                                    url: crearIconoMarcador(sucursal.color, index + 1),
                                    scaledSize: new google.maps.Size(40, 50),
                                    anchor: new google.maps.Point(20, 50),
                                }}
                                title={sucursal.nombre}
                            />
                        ))}

                        {/* Renderizar rutas de conducción */}
                        {rutas.map((ruta, index) => (
                            <DirectionsRenderer
                                key={index}
                                directions={ruta.directions}
                                options={{
                                    suppressMarkers: true,
                                    polylineOptions: {
                                        strokeColor: ruta.color,
                                        strokeWeight: 5,
                                        strokeOpacity: 0.9,
                                    },
                                }}
                            />
                        ))}
                    </GoogleMap>
                </div>

                <div className="seccion-rutas-leyenda">
                    <h3>Leyenda</h3>
                    <div className="leyenda-item leyenda-ubicacion">
                        <span className="leyenda-punto-central"></span>
                        <span>Tu ubicación actual</span>
                    </div>
                    {sucursales.map((sucursal, index) => (
                        <div key={index} className="leyenda-item">
                            <span 
                                className="leyenda-color" 
                                style={{ backgroundColor: sucursal.color }}
                            >
                                {index + 1}
                            </span>
                            <span className="leyenda-nombre">{sucursal.nombre}</span>
                            <span 
                                className="leyenda-linea"
                                style={{ backgroundColor: sucursal.color }}
                            ></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SeccionRutas;

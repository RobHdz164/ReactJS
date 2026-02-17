import { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, DirectionsRenderer } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const containerStyle = {
    width: '100%',
    height: '350px'
};

function MapaConRuta({ lat, lng, nombre_sucursal, mostrarRuta }) {
    const [direcciones, setDirecciones] = useState(null);
    const [ubicacionActual, setUbicacionActual] = useState(null);
    const [error, setError] = useState(null);
    const [cargandoRuta, setCargandoRuta] = useState(false);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    // Obtener ubicación actual del usuario
    useEffect(() => {
        if (mostrarRuta && !ubicacionActual) {
            setCargandoRuta(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUbicacionActual({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setCargandoRuta(false);
                },
                (error) => {
                    console.error('Error obteniendo la ubicación:', error);
                    setError('No se pudo obtener tu ubicación. Por favor, permite el acceso a la ubicación.');
                    setCargandoRuta(false);
                },
                { enableHighAccuracy: true }
            );
        }
        
        // Limpiar estado cuando se oculta la ruta
        if (!mostrarRuta) {
            setDirecciones(null);
            setError(null);
        }
    }, [mostrarRuta, ubicacionActual]);

    // Calcular la ruta
    const calcularRuta = useCallback(() => {
        if (!ubicacionActual || !isLoaded || !mostrarRuta) return;

        // Verificar que google.maps esté disponible
        if (typeof google === 'undefined' || !google.maps) {
            setError('Google Maps no está disponible.');
            return;
        }

        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
            {
                origin: ubicacionActual,
                destination: { lat, lng },
                travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirecciones(result);
                    setError(null);
                } else {
                    console.error('Error al calcular la ruta:', status);
                    setError('No se pudo calcular la ruta.');
                }
            }
        );
    }, [ubicacionActual, lat, lng, isLoaded, mostrarRuta]);

    useEffect(() => {
        if (ubicacionActual && mostrarRuta) {
            calcularRuta();
        }
    }, [ubicacionActual, mostrarRuta, calcularRuta]);

    if (loadError) return <div>Error al cargar el mapa</div>;
    if (!isLoaded) return <div>Cargando mapa...</div>;
    if (cargandoRuta) return <div>Obteniendo tu ubicación...</div>;
    if (error) return <div className="error-mensaje">{error}</div>;

    const center = mostrarRuta && ubicacionActual ? ubicacionActual : { lat, lng };

    return (
        <div>
            <h2>{nombre_sucursal}</h2>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={mostrarRuta ? 12 : 16}
            >
                {!mostrarRuta && <Marker position={{ lat, lng }} />}
                {mostrarRuta && direcciones && (
                    <DirectionsRenderer
                        directions={direcciones}
                        options={{
                            polylineOptions: {
                                strokeColor: '#1e3c5a',
                                strokeWeight: 5,
                            },
                        }}
                    />
                )}
            </GoogleMap>
        </div>
    );
}

MapaConRuta.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    nombre_sucursal: PropTypes.string.isRequired,
    mostrarRuta: PropTypes.bool,
};

MapaConRuta.defaultProps = {
    mostrarRuta: false,
};

export default MapaConRuta;

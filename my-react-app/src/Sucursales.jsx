import './Sucursales.css';
import PropTypes from 'prop-types';
import Mapa from './mapa.jsx';

const sucursales = [
    {
        nombre: "Ztarbooks Centro",
        direccion: "Av. Reforma 245, Col. Centro, CDMX",
        horario: "Lun - Sab: 7:00 AM - 10:00 PM",
        telefono: "(55) 1234-5678",
        caracteristica: "Terraza al aire libre",
        lat: 19.432608,
        lng: -99.133209
    },
    {
        nombre: "Ztarbooks Polanco",
        direccion: "Calle Masaryk 312, Polanco, CDMX",
        horario: "Lun - Dom: 6:30 AM - 11:00 PM",
        telefono: "(55) 2345-6789",
        caracteristica: "Zona de coworking",
        lat: 19.433722,
        lng: -99.190686
    },
    {
        nombre: "Ztarbooks Condesa",
        direccion: "Av. Tamaulipas 89, Condesa, CDMX",
        horario: "Lun - Dom: 7:00 AM - 10:30 PM",
        telefono: "(55) 3456-7890",
        caracteristica: "Pet friendly",
        lat: 19.411311,
        lng: -99.174544
    },
    {
        nombre: "Ztarbooks Santa Fe",
        direccion: "Centro Comercial Santa Fe, Local 204, CDMX",
        horario: "Lun - Dom: 8:00 AM - 9:00 PM",
        telefono: "(55) 4567-8901",
        caracteristica: "Drive-thru disponible",
        lat: 19.366186,
        lng: -99.274588
    },
    {
        nombre: "Ztarbooks Coyoacan",
        direccion: "Calle Francisco Sosa 56, Coyoacan, CDMX",
        horario: "Mar - Dom: 8:00 AM - 9:30 PM",
        telefono: "(55) 5678-9012",
        caracteristica: "Jardin interior",
        lat: 19.350080,
        lng: -99.162030
    },
    {
        nombre: "Ztarbooks Roma Norte",
        direccion: "Calle Orizaba 120, Roma Norte, CDMX",
        horario: "Lun - Sab: 7:00 AM - 11:00 PM",
        telefono: "(55) 6789-0123",
        caracteristica: "Eventos y talleres",
        lat: 19.419068,
        lng: -99.162419
    },
];

function SucursalCard({ sucursal }) {
    return (
        <div className="sucursal-card">
            <div className="sucursal-mapa">
                <Mapa
                    lat={sucursal.lat}
                    lng={sucursal.lng}
                    nombre_sucursal={sucursal.nombre}
                />
            </div>
            <div className="sucursal-info">
                <p className="sucursal-direccion">{sucursal.direccion}</p>
                <p className="sucursal-horario">{sucursal.horario}</p>
                <p className="sucursal-telefono">{sucursal.telefono}</p>
                <span className="sucursal-tag">{sucursal.caracteristica}</span>
            </div>
        </div>
    );
}

SucursalCard.propTypes = {
    sucursal: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        horario: PropTypes.string.isRequired,
        telefono: PropTypes.string.isRequired,
        caracteristica: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
    }).isRequired,
};

function Sucursales() {
    return (
        <div className="sucursales-container">
            <div className="sucursales-header">
                <h2>Nuestras Sucursales</h2>
                <p>Encuentra tu Ztarbooks más cercano</p>
            </div>
            <div className="sucursales-grid">
                {sucursales.map((sucursal, index) => (
                    <SucursalCard key={index} sucursal={sucursal} />
                ))}
            </div>
        </div>
    );
}

export default Sucursales;

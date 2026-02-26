import { useState, useEffect } from 'react';
import './Productos.css';
import api from './Services/api';
import RegistrarProducto from './registrarProducto';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try{
                const response = await api.get('/products');
                setProductos(response.data);
            }catch (error) {
                console.error('Error al obtener los productos:', error);
            } finally {
                setCargando(false);
            }
        };
        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando Productos...</p>;

    return (
        <div className="productos-container">
            <RegistrarProducto />
            <div className="productos-header">
                <h2>Catálogo de Productos</h2>
                <p>Explora nuestras opciones de calidad</p>
            </div>
            <div className="productos-grid">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <div className="producto-img-wrapper">
                            <img src={producto.image} alt={producto.title} />
                        </div>
                        <div className="producto-body">
                            <div className="producto-top">
                                <h3>{producto.title}</h3>
                                <span className="producto-precio">${producto.price}</span>
                            </div>
                            <p className="producto-descripcion">{producto.description}</p>
                        </div>
                        <button className="btn-agregar">Agregar al Carrito</button>
                                <button className="btn-eliminar">Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;

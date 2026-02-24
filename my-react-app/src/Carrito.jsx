import { useState, useEffect } from 'react';
import './Carrito.css';
import api from './Services/api';

function Carrito() {
    const [carritos, setCarritos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerCarrito = async () => {
            try{
                const response = await api.get('/carts');
                setCarritos(response.data);
            }catch (error) {
                console.error('Error al obtener el carrito:', error);
            } finally {
                setCargando(false);
            }
        };
        obtenerCarrito();
    }, []);

    if (cargando) return <p>Cargando Carrito...</p>;

    return (
        <div className="carrito-container">
            <div className="carrito-header">
                <h2>Carrito de Compras</h2>
                <p>Lista de productos en el carrito</p>
            </div>
            <div className="carrito-grid">
                {carritos.map((carrito) => (
                    <div key={carrito.id} className="carrito-card">
                        <div className="carrito-card-header">
                            <h3>Carrito #{carrito.id}</h3>
                        </div>
                        <div className="carrito-card-body">
                            <div className="carrito-detalle">
                                <span className="carrito-label">Usuario ID:</span>
                                <span className="carrito-valor">{carrito.userId}</span>
                            </div>
                            <div className="carrito-detalle">
                                <span className="carrito-label">Fecha:</span>
                                <span className="carrito-valor">{carrito.date}</span>
                            </div>
                            <div className="carrito-productos">
                                <h4>Productos</h4>
                                {carrito.products.map((item, index) => (
                                    <div key={index} className="carrito-producto-item">
                                        <span className="producto-id">Producto #{item.productId}</span>
                                        <span className="producto-cantidad">x{item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrito;
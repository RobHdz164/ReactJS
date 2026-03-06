import { useState, useEffect } from 'react';
import './Productos.css';
import api from './Services/api';
import RegistrarProducto from './registrarProducto';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {
            const response = await api.get('/products');
            setProductos(response.data);
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        } finally {
            setCargando(false);
        }
    };

    const editarProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    const eliminarProducto = async (producto) => {
        const token = localStorage.getItem('ztarbooks_token');
        if (!token) {
            alert('Login inválido o sesión no iniciada. Debes iniciar sesión para eliminar productos.');
            return;
        }

        try {
            await api.delete(`/products/${producto.id}`);
            setProductos((prev) => prev.filter((p) => p.id !== producto.id));
            if (productoSeleccionado?.id === producto.id) {
                setProductoSeleccionado(null);
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando Productos...</p>;

    return (
        <div className="productos-container">
            <RegistrarProducto
                productoEditado={productoSeleccionado}
                limpiarSeleccion={() => setProductoSeleccionado(null)}
                onActualizacionExitosa={obtenerProductos}
            />
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
                        <button className="btn-editar" onClick={() => editarProducto(producto)}>Editar</button>
                        <button className="btn-eliminar" onClick={() => eliminarProducto(producto)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;

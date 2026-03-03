import { useEffect, useState } from 'react';
import './registrarProducto.css';
import API from './Services/api';

function RegistrarProducto({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [productos, setProductos] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    const resetForm = () => {
        setProductos({
            title: '',
            price: '',
            description: '',
            category: '',
            image: ''
        });
    };

    useEffect(() => {
        if (productoEditado) {
            setProductos({
                title: productoEditado.title || '',
                price: productoEditado.price ?? '',
                description: productoEditado.description || '',
                category: productoEditado.category || '',
                image: productoEditado.image || ''
            });
        } else {
            resetForm();
        }
    }, [productoEditado]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductos({
            ...productos,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...productos,
            price: Number(productos.price),
        };

        try {
            if (productoEditado) {
                const response = await API.put(`/products/${productoEditado.id}`, payload);
                alert('Producto actualizado exitosamente');
                console.log(response.data);
                if (limpiarSeleccion) limpiarSeleccion();
            } else {
                const response = await API.post('/products', payload);
                alert('Producto registrado exitosamente');
                console.log(response.data);
            }

            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            console.error('Error al registrar el producto:', error);
            alert('Error al registrar el producto');
        }
    };

    return (
        <div>
            <h1 className="Titulo">{productoEditado ? 'Editar Producto' : 'Registrar Nuevo Producto'}</h1>
            <form className="registrar-producto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Título:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={productos.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={productos.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={productos.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Categoría:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={productos.category}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>URL de la Imagen:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={productos.image}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn-registrar">
                    {productoEditado ? 'Actualizar Producto' : 'Registrar Producto'}
                </button>
            </form>
        </div>
    );
}

export default RegistrarProducto;

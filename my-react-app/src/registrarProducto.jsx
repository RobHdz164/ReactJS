import './registrarProducto.css';

function RegistrarProducto() {
    return (
        <div>  
            <h1 className="Titulo">Registrar Nuevo Producto</h1>
            <form className="registrar-producto-form">
                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" id="price" name="price" required />
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <div className="form-group">
                    <label>Categoría:</label>
                    <input type="text" id="category" name="category" required />
                </div>
                <div className="form-group">
                    <label>URL de la Imagen:</label>
                    <input type="text" id="image" name="image" required />
                </div>
                <button type="submit" className="btn-registrar">Registrar Producto</button>
            </form>
        </div> 
    );}

export default RegistrarProducto;   
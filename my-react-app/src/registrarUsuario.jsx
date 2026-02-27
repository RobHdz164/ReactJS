import './registrarProducto.css';

function RegistrarUsuario() {
    return (
        <div>  
            <h1 className="Titulo">Registrar Nuevo Usuario</h1>
            <form className="registrar-usuario-form">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label>Confirmar Contraseña:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input type="tel" id="phone" name="phone" required />
                </div>
                <button type="submit" className="btn-registrar">Registrar Usuario</button>
            </form>
        </div> 
    );}

export default RegistrarUsuario;   
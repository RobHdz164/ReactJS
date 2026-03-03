import { useEffect, useState } from 'react';
import API from './Services/api';
import './registrarProducto.css';


function RegistrarUsuario({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        if (usuarioEditado) {
            setUsername(usuarioEditado.username || '');
            setEmail(usuarioEditado.email || '');
            setPassword(usuarioEditado.password || '');
        } else {
            resetForm();
        }

    }, [usuarioEditado]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { username, email, password };

        try {
            if (usuarioEditado) {
                const respuesta = await API.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
                console.log('Usuario actualizado:', respuesta.data);
                alert('Usuario actualizado exitosamente');
                if (limpiarSeleccion) limpiarSeleccion();
            } else {
                const respuesta = await API.post('/users', nuevoUsuario);
                console.log('Usuario registrado:', respuesta.data);
                alert('Usuario registrado exitosamente');
            }

            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            alert('Error al registrar el usuario');
        }
    };


    return (
        <div>
            <h1 className="Titulo">Registrar Nuevo Usuario</h1>

            <form className="registrar-usuario-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre:</label>
                    <input
                        type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-registrar">Registrar Usuario</button>
            </form>
        </div>
    );
}

export default RegistrarUsuario;   
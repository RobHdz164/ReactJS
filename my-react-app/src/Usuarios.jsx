import { useState, useEffect } from 'react';
import './Usuarios.css';
import api from './Services/api';
import RegistrarUsuario from './registrarUsuario';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try{
                const response = await api.get('/users');
                setUsuarios(response.data);
            }catch (error) {
                console.error('Error al obtener los usuarios:', error);
            } finally {
                setCargando(false);
            }
        };
        obtenerUsuarios();
    }, []);

    if (cargando) return <p>Cargando Usuarios...</p>;

    return (
        <div className="usuarios-container">
                        <RegistrarUsuario/>
            <div className="usuarios-header">
                <h2>Usuarios Registrados</h2>
                <p>Lista de usuarios del sistema</p>
            </div>
            <div className="usuarios-tabla-wrapper">
                <table className="usuarios-tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nombre de Usuario</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Contraseña</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name.firstname}</td>
                                <td>{usuario.name.lastname}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.phone}</td>
                                <td>{usuario.password}</td>
                                <td className="usuarios-acciones">
                                    <button className="btn-editar">Editar</button>
                                    <button className="btn-eliminar">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Usuarios;
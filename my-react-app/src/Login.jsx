import './Login.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import API from './Services/api';
import { useAuth } from './AuthContext.jsx';
import RegistrarUsuario from './registrarUsuario.jsx';

function Login({ onLoginExitoso }) {
    const { isLoggedIn, login, logout } = useAuth();
    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [credenciales, setCredenciales] = useState({
        username: '',
        password: ''
    });
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredenciales((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMensaje('');
        setCargando(true);

        try {
            const response = await API.post('/auth/login', credenciales);
            const token = response?.data?.token;

            if (!token) {
                setError('Login inválido. Verifica usuario y contraseña.');
                return;
            }

            login(token);
            setMensaje('Inicio de sesión exitoso. Token guardado correctamente.');

            if (onLoginExitoso) {
                setTimeout(() => onLoginExitoso('Inicio de sesión exitoso.'), 700);
            }
        } catch {
            setError('Login inválido. Verifica usuario y contraseña.');
        } finally {
            setCargando(false);
        }
    };

    const handleLogout = () => {
        logout();
        setMensaje('Sesión cerrada correctamente.');
        setError('');
    };

    if (mostrarRegistro) {
        return (
            <div className="login-container">
                <div className="login-card">
                    <RegistrarUsuario 
                        onActualizacionExitosa={() => {
                            setMostrarRegistro(false);
                            setMensaje('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
                        }}
                    />
                    <div style={{ textAlign: 'center', marginTop: '15px' }}>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); setMostrarRegistro(false); }}
                            style={{ color: '#007bff', textDecoration: 'none' }}
                        >
                            ¿Ya tienes usuario?
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                <p>Ingresa con tu usuario y contraseña para generar el token.</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label htmlFor="username">Usuario</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={credenciales.username}
                            onChange={handleChange}
                            placeholder="Ej: mor_2314"
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={credenciales.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div>

                    </div>
                    <button type="submit" className="btn-login" disabled={cargando}>
                        {cargando ? 'Validando...' : 'Ingresar'}
                    </button>
                </form>

                {error && <div className="login-alert login-error">{error}</div>}
                {mensaje && <div className="login-alert login-success">{mensaje}</div>}

                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setMostrarRegistro(true); }}
                        style={{ color: '#007bff', textDecoration: 'none' }}
                    >
                        ¿Registrar Usuario?
                    </a>
                </div>

            </div>
        </div>
    );
}

Login.propTypes = {
    onLoginExitoso: PropTypes.func
};

export default Login;
import './Login.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import API from './Services/api';

function Login({ onLoginExitoso }) {
    const [credenciales, setCredenciales] = useState({
        username: '',
        password: ''
    });
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    const [tokenActivo, setTokenActivo] = useState(Boolean(localStorage.getItem('ztarbooks_token')));

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

            localStorage.setItem('ztarbooks_token', token);
            setTokenActivo(true);
            setMensaje('Inicio de sesión exitoso. Token guardado correctamente.');

            if (onLoginExitoso) {
                setTimeout(() => onLoginExitoso(), 700);
            }
        } catch {
            setError('Login inválido. Verifica usuario y contraseña.');
        } finally {
            setCargando(false);
        }
    };

    const cerrarSesion = () => {
        localStorage.removeItem('ztarbooks_token');
        setTokenActivo(false);
        setMensaje('Sesión cerrada correctamente.');
        setError('');
    };

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

                    <button type="submit" className="btn-login" disabled={cargando}>
                        {cargando ? 'Validando...' : 'Ingresar'}
                    </button>
                </form>

                {error && <div className="login-alert login-error">{error}</div>}
                {mensaje && <div className="login-alert login-success">{mensaje}</div>}

                {tokenActivo && (
                    <div className="login-token-info">
                        <span>Ya existe una sesión activa en este navegador.</span>
                        <button className="btn-logout" onClick={cerrarSesion}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </div>
    );
}

Login.propTypes = {
    onLoginExitoso: PropTypes.func
};

export default Login;
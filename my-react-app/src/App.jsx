import { useEffect, useState } from "react";
import ContenedorTarjeta from './ContenedorTarjeta.jsx';
import Encabezado from './Encabezado.jsx';
import Seccion from './Seccion.jsx';
import SeccionRutas from './SeccionRutas.jsx';
import Footer from './Footer.jsx';
import AcercaDe from './AcercaDe.jsx';
import Productos from './Productos.jsx';
import Galeria from './Galeria.jsx';
import Sucursales from './Sucursales.jsx';
import Contacto from './Contacto.jsx';
import Usuarios from './Usuarios.jsx';
import Carrito from './Carrito.jsx';
import Login from './Login.jsx';
import Categorias from './Categorias.jsx';
import { AuthProvider } from "./AuthContext.jsx";
import './App.css';

function ContenidoPrincipal({ vista, onLoginExitoso }) {
  switch (vista) {
    case 'Acerca de':  return <AcercaDe />;
    case 'Productos':  return <Productos />;
    case  'Usuarios':   return <Usuarios />;
    case 'Categorias': return <Categorias />;
    case 'Galeria':    return <Galeria />;
    case 'Sucursales': return <Sucursales />;
    case 'Contacto':   return <Contacto />;
    case 'Carrito':    return <Carrito />;
    case 'Login':      return <Login onLoginExitoso={onLoginExitoso} />;
    default:           return <ContenedorTarjeta />;
  }
}

function App(){
  const [vista,setVista] = useState("Inicio");
  const [mensajeInicio, setMensajeInicio] = useState('');

  useEffect(() => {
    if (!mensajeInicio) return;

    const timeoutId = setTimeout(() => {
      setMensajeInicio('');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [mensajeInicio]);

  const manejarLoginExitoso = (mensaje) => {
    setMensajeInicio(mensaje || 'Inicio de sesión exitoso.');
    setVista('Inicio');
  };

  return (
    <div>
      <AuthProvider>
      <Encabezado cambiarVista={setVista}/>
      {vista === 'Inicio' && mensajeInicio && (
        <div className="app-login-exito">{mensajeInicio}</div>
      )}
      <ContenidoPrincipal vista={vista} onLoginExitoso={manejarLoginExitoso} />
      </AuthProvider>
      <Seccion />
      <SeccionRutas />
      <Footer/>
    </div>
  )
}
export default App;
import { useState } from "react";
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

function ContenidoPrincipal({ vista }) {
  switch (vista) {
    case 'Acerca de':  return <AcercaDe />;
    case 'Productos':  return <Productos />;
    case  'Usuarios':   return <Usuarios />;
    case 'Galeria':    return <Galeria />;
    case 'Sucursales': return <Sucursales />;
    case 'Contacto':   return <Contacto />;
    case 'Carrito':    return <Carrito />;
    default:           return <ContenedorTarjeta />;
  }
}

function App(){
  const [vista,setVista] = useState("Inicio");

  return (
    <div>
      <Encabezado cambiarVista={setVista}/>
      <ContenidoPrincipal vista={vista} />
      <Seccion />
      <SeccionRutas />
      <Footer/>
    </div>
  )
}
export default App;
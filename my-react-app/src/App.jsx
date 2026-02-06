import { useState } from "react";
import ContenedorTarjeta from './ContenedorTarjeta.jsx';
import Encabezado from './Encabezado.jsx';
import Seccion from './Seccion.jsx';
import Footer from './Footer.jsx';

function App(){
  const [vista,setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista}/>
      <ContenedorTarjeta vista={vista} />
      <Seccion/>
      <Footer/>
    </div>
  )
}
export default App;
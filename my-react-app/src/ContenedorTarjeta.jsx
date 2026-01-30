import './ContenedorTarjeta.css';
import tarjetaLogo from './assets/imgtarjeta.png';

function ContenedorTarjeta(){
  return (
    <div className="ContenedorTarjeta">
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
        <Tarjeta/>
    </div>
  );
}

function Tarjeta(){
  return (
    <div className="Tarjeta">
        <img src={tarjetaLogo} alt="Tarjeta Logo"></img>
        <h3>Esta es una tarjeta</h3>
        <p>Contenido de la tarjeta</p>
        <a href='#'>Ver más</a>
    </div>  );
}   
export default ContenedorTarjeta;
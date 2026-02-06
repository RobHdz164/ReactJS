import './ContenedorTarjeta.css';
import tarjetaLogo from './assets/imgtarjeta.png';

function ContenedorTarjeta(){
  return (
    <div className="ContenedorTarjeta">
        <Tarjeta titulo="Cafe latte" contenido="Delicioso cafe con leche" />
        <Tarjeta titulo="Espresso" contenido="Cafe fuerte y concentrado" />
        <Tarjeta titulo="Cappuccino" contenido="Cafe con espuma de leche" />
        <Tarjeta titulo="Mocha" contenido="Cafe con chocolate y leche" />
    </div>
  );
}

function Tarjeta(props){
  return (
    <div className="Tarjeta">
        <img src={tarjetaLogo} alt="Tarjeta Logo"></img>
        <h3>{props.titulo}</h3>
        <p>{props.contenido}</p>
        <a href='#'>Ver más</a>
    </div>  );
}   
export default ContenedorTarjeta;
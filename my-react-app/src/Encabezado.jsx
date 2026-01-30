import milogo from './assets/logo.png';
import Tiktok from './assets/tik-tok.png';
import Youtube from './assets/youtube.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import './Encabezado.css';

function Encabezado() {
  return (
    <div className="encabezado">
        <Logo/>
        <Menu/>
        <Redes/>
    </div>
  );
}


function Logo(){
    return (    
    <div className='logoDiv'>
        <img src={milogo} alt="Logo de la aplicación"/>
    </div>
        );
}
function Redes(){
    return (
        <div className='redesDiv'>
        <ul>
            <li><a href='#'><img src={Tiktok} alt="Tiktok"/></a></li>
            <li><a href='#'><img src={Youtube} alt="Youtube"/></a></li>
            <li><a href='#'><img src={Instagram} alt="Instagram"/></a></li>
            <li><a href='#'><img src={Twitter} alt="Twitter"/></a></li>
        </ul>
        </div>
    );
}

function Menu(){
    return (
        <div className='menuDiv'>
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Galeria</a></li>
                <li><a href='#'>Clientes</a></li>
                <li><a href='#'>Contactos</a></li>
                <li><a href='#'>Sucursales</a></li>
            </ul>
        </div>
    )
}
export default Encabezado;
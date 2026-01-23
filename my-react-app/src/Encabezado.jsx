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
        <h2>Bienvenido a mi sitio</h2>
    </div>
  );
}


function Logo(){
    return (    
    <div className='logo'>
        <img src={milogo} alt="Logo de la aplicación"/>
    </div>
        );
}
function Redes(){
    return (
        <div className='redes'>
        <ul>
            <li><img src={Tiktok} alt="Tiktok"/></li>
            <li><img src={Youtube} alt="Youtube"/></li>
            <li><img src={Instagram} alt="Instagram"/></li>
            <li><img src={Twitter} alt="Twitter"/></li>
        </ul>
        </div>
    );
}

function Menu(){
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    )
}
export default Encabezado;
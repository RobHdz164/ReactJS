import milogo from './assets/logo.jpg';
import Tiktok from './assets/tik-tok.png';
import Youtube from './assets/youtube.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import './Encabezado.css';
import PropTypes from 'prop-types';
import Clima from './Clima.jsx';

function Encabezado({cambiarVista}) {
  return (
    <div className="encabezado">
        <Logo/>
        <Menu cambiarVista={cambiarVista}/>
        <Clima/>
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

function Menu({cambiarVista}){
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('Acerca de')}>Acerca de</li>
                <li onClick={() => cambiarVista('Usuarios')}>Usuarios</li>
                <li onClick={() => cambiarVista('Productos')}>Productos</li>
                <li onClick={() => cambiarVista('Galeria')}>Galeria</li>
                <li onClick={() => cambiarVista('Sucursales')}>Sucursales</li>
                <li onClick={() => cambiarVista('Contacto')}>Contacto</li>
                <li onClick={() => cambiarVista('Carrito')}>Carrito</li>
            </ul>
        </div>
    )
}

Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};
Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}; 
export default Encabezado;
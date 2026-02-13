import MapaGeolocalizacion from './mapaGeolocalizacion.jsx';
import './Seccion.css';

function Seccion() {
  return (
    <div className="seccion-container">
      <div className="seccion-content">
        <h1 className="seccion-titulo">Ztarbooks</h1>
        <p className="seccion-texto">Bienvenido a Ztarbooks, donde cada taza cuenta una historia de pasión por el café y la dedicación a la calidad. Desde nuestros granos seleccionados hasta el arte de preparar cada bebida, nos esforzamos por ofrecer una experiencia única que deleite tus sentidos. Ya sea que prefieras un espresso intenso, un latte cremoso o una infusión refrescante, en Starbucks encontrarás el sabor perfecto para cada momento del día. ¡Disfruta de tu café con nosotros!</p>
          <MapaGeolocalizacion />
      </div>
    </div>
  );
}

export default Seccion;

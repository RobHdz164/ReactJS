import './ContenedorTarjeta.css';
import tarjetaLogo from './assets/imgtarjeta.png';

function ContenedorTarjeta(){
  return (
    <div className="ContenedorTarjeta">
      <Tarjeta titulo="Cafe latte" contenido="Delicioso cafe con leche" imagen="https://m.media-amazon.com/images/I/81jSgNvFxfL._AC_UF894,1000_QL80_.jpg" />
      <Tarjeta titulo="Espresso" contenido="Cafe fuerte y concentrado" imagen="https://dulcealcance.com/cdn/shop/products/starbucksvanilla4.jpg?v=1685437213&width=1445" />
      <Tarjeta titulo="Cappuccino" contenido="Cafe con espuma de leche" imagen="https://dulcealcance.com/cdn/shop/products/starbucksvanilla2.jpg?v=1685437240&width=1445" />
      <Tarjeta titulo="Mocha" contenido="Cafe con chocolate y leche" imagen="https://www.nestleprofessional-latam.com/sites/default/files/styles/np_product_detail/public/2023-05/7613038704845-8_2.png?itok=4cgbAppV"/>
    </div>
  );
}

function Tarjeta(props){
  return (
    <div className="Tarjeta">
        <img src={props.imagen} alt="Tarjeta Logo"></img>
        <h3>{props.titulo}</h3>
        <p>{props.contenido}</p>
        <a href='#'>Ver más</a>
    </div>  );
}   

export default ContenedorTarjeta;
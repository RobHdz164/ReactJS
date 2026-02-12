import './Productos.css';

const productos = [
    {
        nombre: "Café Latte",
        descripcion: "Suave espresso combinado con leche vaporizada y una fina capa de espuma sedosa.",
        precio: "$65.00",
        imagen: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=500"
    },
    {
        nombre: "Espresso Doble",
        descripcion: "Doble shot de espresso intenso, ideal para los amantes del café puro y con cuerpo.",
        precio: "$50.00",
        imagen: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500"
    },
    {
        nombre: "Cappuccino",
        descripcion: "Equilibrio perfecto entre espresso, leche vaporizada y abundante espuma cremosa.",
        precio: "$70.00",
        imagen: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
    },
    {
        nombre: "Mocha",
        descripcion: "Espresso con chocolate oscuro y leche, coronado con crema batida irresistible.",
        precio: "$75.00",
        imagen: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500"
    },
    {
        nombre: "Americano",
        descripcion: "Espresso diluido en agua caliente para un sabor suave pero con carácter único.",
        precio: "$45.00",
        imagen: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500"
    },
    {
        nombre: "Cold Brew",
        descripcion: "Café preparado en frío durante 12 horas, suave, refrescante y lleno de sabor.",
        precio: "$80.00",
        imagen: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500"
    },
    {
        nombre: "Café Turco",
        descripcion: "Preparación tradicional con granos molidos extra finos y un toque de cardamomo.",
        precio: "$60.00",
        imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500"
    },
    {
        nombre: "Frappé Caramelo",
        descripcion: "Bebida fría mezclada con café, hielo, leche y sirope de caramelo artesanal.",
        precio: "$85.00",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500"
    },
];

function ProductoCard({ producto }) {
    return (
        <div className="producto-card">
            <div className="producto-img-wrapper">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="producto-body">
                <div className="producto-top">
                    <h3>{producto.nombre}</h3>
                    <span className="producto-precio">{producto.precio}</span>
                </div>
                <p className="producto-descripcion">{producto.descripcion}</p>
                <a href="#" className="producto-btn">Ordenar ahora</a>
            </div>
        </div>
    );
}

function Productos() {
    return (
        <div className="productos-container">
            <div className="productos-header">
                <h2>Nuestros Productos</h2>
                <p>Descubre nuestra selección de cafés de especialidad</p>
            </div>
            <div className="productos-grid">
                {productos.map((producto, index) => (
                    <ProductoCard key={index} producto={producto} />
                ))}
            </div>
        </div>
    );
}

export default Productos;

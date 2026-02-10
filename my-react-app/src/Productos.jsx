import './Productos.css';

const productos = [
    {
        nombre: "Café Latte",
        descripcion: "Suave espresso combinado con leche vaporizada y una fina capa de espuma.",
        precio: "$65.00",
        imagen: "https://m.media-amazon.com/images/I/81jSgNvFxfL._AC_UF894,1000_QL80_.jpg"
    },
    {
        nombre: "Espresso Doble",
        descripcion: "Doble shot de espresso intenso, ideal para los amantes del café puro.",
        precio: "$50.00",
        imagen: "https://dulcealcance.com/cdn/shop/products/starbucksvanilla4.jpg?v=1685437213&width=1445"
    },
    {
        nombre: "Cappuccino",
        descripcion: "Equilibrio perfecto entre espresso, leche vaporizada y abundante espuma cremosa.",
        precio: "$70.00",
        imagen: "https://dulcealcance.com/cdn/shop/products/starbucksvanilla2.jpg?v=1685437240&width=1445"
    },
    {
        nombre: "Mocha",
        descripcion: "Espresso con chocolate oscuro y leche, coronado con crema batida.",
        precio: "$75.00",
        imagen: "https://www.nestleprofessional-latam.com/sites/default/files/styles/np_product_detail/public/2023-05/7613038704845-8_2.png?itok=4cgbAppV"
    },
    {
        nombre: "Americano",
        descripcion: "Espresso diluido en agua caliente para un sabor suave pero con carácter.",
        precio: "$45.00",
        imagen: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400"
    },
    {
        nombre: "Cold Brew",
        descripcion: "Café preparado en frío durante 12 horas, suave y refrescante.",
        precio: "$80.00",
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"
    },
    {
        nombre: "Café Turco",
        descripcion: "Preparación tradicional con granos molidos extra finos y un toque de cardamomo.",
        precio: "$60.00",
        imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=400"
    },
    {
        nombre: "Frappuccino Caramelo",
        descripcion: "Bebida fría mezclada con café, hielo, leche y sirope de caramelo.",
        precio: "$85.00",
        imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
    },
];

function ProductoCard({ producto }) {
    return (
        <div className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="producto-descripcion">{producto.descripcion}</p>
            <p className="producto-precio">{producto.precio}</p>
            <a href="#" className="producto-btn">Ordenar</a>
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

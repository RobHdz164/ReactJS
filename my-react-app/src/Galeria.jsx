import './Galeria.css';

const imagenes = [
    {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
        titulo: "Nuestro Café Signature",
        categoria: "Bebidas"
    },
    {
        src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600",
        titulo: "Ambiente Acogedor",
        categoria: "Espacios"
    },
    {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
        titulo: "Arte Latte",
        categoria: "Bebidas"
    },
    {
        src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
        titulo: "Terraza al Aire Libre",
        categoria: "Espacios"
    },
    {
        src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600",
        titulo: "Granos Seleccionados",
        categoria: "Proceso"
    },
    {
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600",
        titulo: "Preparación Artesanal",
        categoria: "Proceso"
    },
    {
        src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600",
        titulo: "Postres y Acompañamientos",
        categoria: "Comida"
    },
    {
        src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600",
        titulo: "Momentos Especiales",
        categoria: "Experiencias"
    },
    {
        src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
        titulo: "Café para Llevar",
        categoria: "Bebidas"
    },
];

function ImagenCard({ imagen }) {
    return (
        <div className="galeria-card">
            <img src={imagen.src} alt={imagen.titulo} />
            <div className="galeria-overlay">
                <h3>{imagen.titulo}</h3>
                <span className="galeria-categoria">{imagen.categoria}</span>
            </div>
        </div>
    );
}

function Galeria() {
    return (
        <div className="galeria-container">
            <div className="galeria-header">
                <h2>Nuestra Galería</h2>
                <p>Un vistazo a la experiencia Ztarbooks</p>
            </div>
            <div className="galeria-grid">
                {imagenes.map((imagen, index) => (
                    <ImagenCard key={index} imagen={imagen} />
                ))}
            </div>
        </div>
    );
}

export default Galeria;

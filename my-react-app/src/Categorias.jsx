import { useState, useEffect } from 'react';
import './Categorias.css';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/categories.php')
            .then((res) => res.json())
            .then((data) => {
                setCategorias(data.categories);
            })
            .catch((error) => {
                console.error('Error al obtener las categorias:', error);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) return <p className="categorias-cargando">Cargando Categorías...</p>;

    return (
        <div className="categorias-container">
            <div className="categorias-header">
                <h2>Categorías de Comidas</h2>
                <p>Explora las distintas categorías culinarias del mundo</p>
            </div>
            <div className="categorias-grid">
                {categorias.map((cat) => (
                    <div
                        key={cat.idCategory}
                        className={`categoria-card${categoriaSeleccionada?.idCategory === cat.idCategory ? ' categoria-card--activa' : ''}`}
                        onClick={() =>
                            setCategoriaSeleccionada(
                                categoriaSeleccionada?.idCategory === cat.idCategory ? null : cat
                            )
                        }
                    >
                        <div className="categoria-img-wrapper">
                            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                        </div>
                        <div className="categoria-body">
                            <h3>{cat.strCategory}</h3>
                            <p className="categoria-descripcion">
                                {cat.strCategoryDescription.length > 120
                                    ? cat.strCategoryDescription.slice(0, 120) + '…'
                                    : cat.strCategoryDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categorias;
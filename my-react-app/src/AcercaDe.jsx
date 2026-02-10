import './AcercaDe.css';

function AcercaDe() {
    return (
        <div className="acercaDe-container">
            <div className="acercaDe-header">
                <h2>Acerca de Ztarbooks</h2>
                <p>Pasión por el café desde el primer grano</p>
            </div>

            <div className="acercaDe-grid">
                <div className="acercaDe-card">
                    <h3>Nuestra Historia</h3>
                    <p>
                        Ztarbooks nació con la idea de ofrecer café de especialidad en un
                        ambiente acogedor. Desde nuestros inicios, nos hemos dedicado a
                        seleccionar los mejores granos de distintas regiones del mundo para
                        crear mezclas únicas que deleiten cada paladar.
                    </p>
                </div>

                <div className="acercaDe-card">
                    <h3>Nuestro Compromiso</h3>
                    <p>
                        Trabajamos directamente con productores locales bajo prácticas de
                        comercio justo. Cada taza que servimos apoya a comunidades
                        cafetaleras y promueve la agricultura sostenible y responsable
                        con el medio ambiente.
                    </p>
                </div>

                <div className="acercaDe-card">
                    <h3>Nuestra Misión</h3>
                    <p>
                        Brindar una experiencia excepcional a través de café de la más
                        alta calidad, un servicio cálido y espacios diseñados para que
                        cada visita sea un momento especial en tu día.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AcercaDe;
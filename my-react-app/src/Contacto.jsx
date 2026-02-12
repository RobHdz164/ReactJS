import { useState } from 'react';
import './Contacto.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        sucursal: '',
        motivo: '',
        asunto: '',
        mensaje: '',
        preferencia: 'email',
        acepta: false
    });
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setFormData({
            nombre: '', apellido: '', email: '', telefono: '',
            sucursal: '', motivo: '', asunto: '', mensaje: '',
            preferencia: 'email', acepta: false
        });
        setTimeout(() => setEnviado(false), 4000);
    };

    return (
        <div className="contacto-container">
            <div className="contacto-header">
                <h2>Contactanos</h2>
                <p>Estamos encantados de escucharte</p>
            </div>

            <div className="contacto-content">
                <form className="contacto-form" onSubmit={handleSubmit}>
                    {enviado && (
                        <div className="contacto-exito">
                            Mensaje enviado con exito. Te responderemos pronto.
                        </div>
                    )}

                    <div className="form-fila">
                        <div className="form-grupo">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text" id="nombre" name="nombre"
                                value={formData.nombre} onChange={handleChange}
                                placeholder="Tu nombre" required
                            />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text" id="apellido" name="apellido"
                                value={formData.apellido} onChange={handleChange}
                                placeholder="Tu apellido" required
                            />
                        </div>
                    </div>

                    <div className="form-fila">
                        <div className="form-grupo">
                            <label htmlFor="email">Correo electronico</label>
                            <input
                                type="email" id="email" name="email"
                                value={formData.email} onChange={handleChange}
                                placeholder="tu@email.com" required
                            />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="telefono">Telefono</label>
                            <input
                                type="tel" id="telefono" name="telefono"
                                value={formData.telefono} onChange={handleChange}
                                placeholder="(55) 0000-0000"
                            />
                        </div>
                    </div>

                    <div className="form-fila">
                        <div className="form-grupo">
                            <label htmlFor="sucursal">Sucursal de interes</label>
                            <select
                                id="sucursal" name="sucursal"
                                value={formData.sucursal} onChange={handleChange}
                            >
                                <option value="">Selecciona una sucursal</option>
                                <option value="centro">Ztarbooks Centro</option>
                                <option value="polanco">Ztarbooks Polanco</option>
                                <option value="condesa">Ztarbooks Condesa</option>
                                <option value="santafe">Ztarbooks Santa Fe</option>
                                <option value="coyoacan">Ztarbooks Coyoacan</option>
                                <option value="roma">Ztarbooks Roma Norte</option>
                            </select>
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="motivo">Motivo de contacto</label>
                            <select
                                id="motivo" name="motivo"
                                value={formData.motivo} onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un motivo</option>
                                <option value="informacion">Informacion general</option>
                                <option value="sugerencia">Sugerencia</option>
                                <option value="queja">Queja o reclamo</option>
                                <option value="eventos">Eventos y reservaciones</option>
                                <option value="empleo">Oportunidades de empleo</option>
                                <option value="proveedor">Ser proveedor</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-grupo">
                        <label htmlFor="asunto">Asunto</label>
                        <input
                            type="text" id="asunto" name="asunto"
                            value={formData.asunto} onChange={handleChange}
                            placeholder="Escribe el asunto de tu mensaje" required
                        />
                    </div>

                    <div className="form-grupo">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje" name="mensaje"
                            value={formData.mensaje} onChange={handleChange}
                            placeholder="Escribe tu mensaje aqui..."
                            rows="5" required
                        ></textarea>
                    </div>

                    <div className="form-grupo">
                        <label>Preferencia de respuesta</label>
                        <div className="form-radios">
                            <label className="radio-label">
                                <input
                                    type="radio" name="preferencia" value="email"
                                    checked={formData.preferencia === 'email'}
                                    onChange={handleChange}
                                />
                                Correo electronico
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio" name="preferencia" value="telefono"
                                    checked={formData.preferencia === 'telefono'}
                                    onChange={handleChange}
                                />
                                Telefono
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio" name="preferencia" value="whatsapp"
                                    checked={formData.preferencia === 'whatsapp'}
                                    onChange={handleChange}
                                />
                                WhatsApp
                            </label>
                        </div>
                    </div>

                    <div className="form-grupo form-check">
                        <label className="checkbox-label">
                            <input
                                type="checkbox" name="acepta"
                                checked={formData.acepta}
                                onChange={handleChange}
                                required
                            />
                            Acepto el aviso de privacidad y el uso de mis datos para ser contactado.
                        </label>
                    </div>

                    <button type="submit" className="contacto-btn">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
